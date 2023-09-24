import { Module, RequestMethod } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { CartesiModule } from './cartesi/cartesi.module';
import { ProofModule } from './proof/proof.module';
import { VendorModule } from './vendor/vendor.module';
const { NODE_ENV } = process.env;
@Module({
  imports: [
    TerminusModule,
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: true,
        formatters: {
          level: (label) => ({ level: label }),
        },
        reqCustomProps: (req) => {
          return {
            accountId: req.headers['x-account-id'],
            gameId: req.headers['x-game-id'],
            clientRequestId: req.headers['x-client-request-id'],
          };
        },
        level: NODE_ENV === 'prod' ? 'info' : 'debug',
        // install 'pino-pretty' package in order to use the following option
        transport: NODE_ENV === 'local' ? { target: 'pino-pretty' } : undefined,
      },
      exclude: [{ method: RequestMethod.GET, path: '/api/health' }],
    }),
    CartesiModule,
    ProofModule,
    VendorModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
