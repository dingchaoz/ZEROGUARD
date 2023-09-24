import { spawnSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
const rootPath = process.cwd();
const rootPKGPath = path.join(rootPath, 'package.json');
const rootPKG = JSON.parse(fs.readFileSync(rootPKGPath, { encoding: 'utf-8' }));
const rootTsconfigPath = path.join(rootPath, 'tsconfig.json');
const rootTsconfig = JSON.parse(
  fs.readFileSync(rootTsconfigPath, { encoding: 'utf-8' }),
);
const jestE2EPath = path.join(rootPath, 'test/jest-e2e.json');
const jestE2E = JSON.parse(fs.readFileSync(jestE2EPath, { encoding: 'utf-8' }));

const packageName = process.argv[2];
if (!packageName) {
  throw new Error('npm run package:create -- {package_name}');
}
const notOpenapiClientPKG = packageName.indexOf('-client') === -1;

const packageRelativePath = path.join('packages', packageName);

spawnSync('lerna', ['init', '--exact']);

if (notOpenapiClientPKG) {
  rootPKG.scripts.format =
    'prettier --write "src/**/*.ts" "test/**/*.ts" "packages/**/*.ts"';
  rootPKG.jest.rootDir = '.';
  rootPKG.jest.coverageDirectory = './coverage';
  rootPKG.jest.setupFiles = rootPKG.jest.setupFiles
    ? rootPKG.jest.setupFiles.map((f: string) =>
        f.replace('./', '<rootDir>/src/'),
      )
    : [];
  const roots =
    rootPKG.jest && rootPKG.jest.roots
      ? new Set<string>(rootPKG.jest.roots)
      : new Set<string>();
  roots.add('<rootDir>/src/');
  roots.add('<rootDir>/packages/');

  rootPKG.jest.roots = [...roots.values()];

  rootPKG.jest.moduleNameMapper = rootPKG.jest.moduleNameMapper
    ? rootPKG.jest.moduleNameMapper
    : {};

  rootPKG.jest.moduleNameMapper[
    `@app/${packageName}/(.*)`
  ] = `<rootDir>/packages/${packageName}/src/$1`;

  rootPKG.jest.moduleNameMapper[
    `@app/${packageName}`
  ] = `<rootDir>/packages/${packageName}/src`;

  if (!rootPKG['lint-staged']['{src,apps,libs,test,packages}/**/*.ts']) {
    rootPKG['lint-staged']['{src,apps,libs,test,packages}/**/*.ts'] =
      rootPKG['lint-staged']['{src,apps,libs,test}/**/*.ts'];
    delete rootPKG['lint-staged']['{src,apps,libs,test}/**/*.ts'];
  }

  fs.writeFileSync(rootPKGPath, JSON.stringify(rootPKG, null, 2), {
    encoding: 'utf-8',
  });
  rootTsconfig.compilerOptions = rootTsconfig.compilerOptions
    ? rootTsconfig.compilerOptions
    : {};
  rootTsconfig.compilerOptions.paths = rootTsconfig.compilerOptions.paths
    ? rootTsconfig.compilerOptions.paths
    : {};

  rootTsconfig.compilerOptions.paths[`@app/${packageName}`] = [
    `packages/${packageName}/src`,
  ];

  rootTsconfig.compilerOptions.paths[`@app/${packageName}/*`] = [
    `packages/${packageName}/src/*`,
  ];

  fs.writeFileSync(rootTsconfigPath, JSON.stringify(rootTsconfig, null, 2), {
    encoding: 'utf-8',
  });
  jestE2E.moduleNameMapper = jestE2E.moduleNameMapper
    ? jestE2E.moduleNameMapper
    : {};
  jestE2E.moduleNameMapper[
    `@app/${packageName}/(.*)`
  ] = `<rootDir>/../packages/${packageName}/src/$1`;

  jestE2E.moduleNameMapper[
    `@app/${packageName}`
  ] = `<rootDir>/../packages/${packageName}/src`;

  fs.writeFileSync(jestE2EPath, JSON.stringify(jestE2E, null, 2), {
    encoding: 'utf-8',
  });
}
// process.exit(0);
// spawnSync('npm', ['init', '-y'], {
//   encoding: 'utf-8',
// });
spawnSync('lerna', ['create', packageName, '-y']);

process.chdir(packageRelativePath);

const defaultPKG = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' }),
);

const newPKG = {
  ...defaultPKG,
  name: `@tokenbricks/${rootPKG.name}-${packageName}`,
  main: 'dist/index.js',
  types: 'dist/index.d.ts',
  files: ['dist'],
  license: rootPKG.license,
  repository: {
    type: 'git',
    url: `git+https://github.com/TokenBricks/${rootPKG.name}.git`,
  },
  publishConfig: {
    registry: 'https://npm.pkg.github.com/',
  },
  scripts: {
    test: 'echo "Error: run tests from root" && exit 1',
    prebuild: 'rimraf dist',
    build: 'tsc --build tsconfig.json',
  },
};

delete newPKG.directories;

console.log(newPKG);

fs.writeFileSync('./package.json', JSON.stringify(newPKG, null, 2), {
  encoding: 'utf-8',
});

spawnSync('rm', ['-rf', 'lib', '__tests__', 'README.md']);
spawnSync('mkdir', ['src']);
fs.writeFileSync('./src/index.ts', "console.log('hello world');", {
  encoding: 'utf-8',
});

fs.writeFileSync(
  './tsconfig.json',
  JSON.stringify(
    {
      compilerOptions: {
        module: 'commonjs',
        declaration: true,
        noImplicitAny: false,
        skipLibCheck: true,
        noUnusedLocals: false,
        importHelpers: true,
        removeComments: true,
        noLib: false,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: 'es2017',
        sourceMap: false,
        allowJs: false,
        strict: true,
        strictNullChecks: false,
        baseUrl: './',
        outDir: './dist',
      },
      exclude: ['../node_modules', './**/*.spec.ts'],
      include: ['*.ts', '**/*.ts'],
    },
    null,
    2,
  ),
  {
    encoding: 'utf-8',
  },
);
