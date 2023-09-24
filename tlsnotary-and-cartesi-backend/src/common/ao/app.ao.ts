import { ApiProperty } from '@nestjs/swagger';

export class healthCheckAO {
  @ApiProperty({ example: 'available' })
  message: string;
}
