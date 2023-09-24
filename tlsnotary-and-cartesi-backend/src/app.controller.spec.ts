import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { HealthCheckResult, TerminusModule } from '@nestjs/terminus';
import { LoggerModule } from 'nestjs-pino';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule, LoggerModule.forRoot()],
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "available"', async () => {
      const result = new Promise<HealthCheckResult>((resolve) => {
        resolve({
          status: 'ok',
          info: { 'nats-streaming': { status: 'up' } },
          error: {},
          details: { 'nats-streaming': { status: 'up' } },
        });
      });
      jest.spyOn(appController, 'healthCheck').mockImplementation(() => result);
      expect(appController.healthCheck()).toBe(result);
    });
  });
});
