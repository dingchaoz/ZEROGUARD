import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

const { CARTESI_ROLLUPS_EXAMPLES_FRONTEND_CONSOLE_PATH } = process.env;

@Injectable()
export class CartesiService {
  constructor() {}

  async getCartesi(payload: string) {
    await new Promise((resolve) => {
      try {
        // yarn start input send --payload "Hello there7"
        const process = spawn(
          'yarn',
          ['start', 'input', 'send', '--payload', payload],
          { cwd: CARTESI_ROLLUPS_EXAMPLES_FRONTEND_CONSOLE_PATH },
        );

        process.on('close', () => {
          resolve('ok');
          return;
        });
      } catch (e) {
        throw e;
      }
    });

    let result = '';
    await new Promise((resolve) => {
      try {
        // yarn start notice list
        const process = spawn('yarn', ['start', 'notice', 'list'], {
          cwd: CARTESI_ROLLUPS_EXAMPLES_FRONTEND_CONSOLE_PATH,
        });

        process.stdout.on('data', (data) => {
          if (`${data}`.includes('payload')) {
            result = JSON.parse(data).reverse()[0].payload;
          }
        });

        process.on('close', () => {
          resolve('ok');
          return;
        });
      } catch (e) {
        throw e;
      }
    });

    console.log('getCartesi result', result);

    return result;
  }
}
