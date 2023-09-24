import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { CartesiService } from '../cartesi/cartesi.service';

const { TLS_EXAMPLE_PATH } = process.env;
const proofFileName = 'proof.json';

@Injectable()
export class ProofService {
  constructor(private readonly cartesiService: CartesiService) {}

  async generateKycProof(userId: number) {
    let proverFile = 'simple_prover_none';
    if (userId == 1) {
      proverFile = 'simple_prover_passed';
    }

    await new Promise((resolve) => {
      try {
        // cargo run --release --example simple_prover
        const rustProcess = spawn(
          'cargo',
          ['run', '--release', '--example', proverFile],
          { cwd: TLS_EXAMPLE_PATH },
        );

        rustProcess.on('close', () => {
          resolve('ok');
          return;
        });
      } catch (e) {
        throw e;
      }
    });

    return {
      filePath: path.join(TLS_EXAMPLE_PATH, proofFileName),
      fileName: proofFileName,
    };
  }

  async verifyKycProof(file: Express.Multer.File) {
    const { buffer } = file;

    const proofFileNamePath = path.join(TLS_EXAMPLE_PATH, proofFileName);

    if (fs.existsSync(proofFileNamePath)) {
      fs.unlinkSync(proofFileNamePath);
    }

    fs.writeFileSync(proofFileNamePath, buffer);

    const result = await this.cartesiService.getCartesi(proofFileName);
    // fs.unlinkSync(proofFileNamePath);

    // await new Promise((resolve) => {
    //   try {
    //     // cargo run --release --example simple_verifier
    //     const rustProcess = spawn(
    //       'cargo',
    //       ['run', '--release', '--example', 'simple_verifier'],
    //       { cwd: TLS_EXAMPLE_PATH },
    //     );

    //     rustProcess.stdout.on('data', (data) => {
    //       result = `${data}`;
    //     });

    //     rustProcess.on('close', () => {
    //       resolve('ok');
    //       return;
    //     });
    //   } catch (e) {
    //     throw e;
    //   }
    // });

    return result;
  }
}
