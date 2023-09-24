import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { healthCheckAO } from './common/ao/app.ao';

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    @InjectPinoLogger(AppController.name) private readonly logger: PinoLogger,
  ) {}

  @Get('health')
  @HealthCheck()
  @ApiOkResponse({
    type: () => healthCheckAO,
  })
  healthCheck(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }
}
