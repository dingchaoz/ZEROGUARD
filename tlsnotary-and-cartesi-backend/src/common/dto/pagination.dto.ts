import { IsOptional, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { QueryOrderByDTO } from './order-by.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryPaginationDTO extends QueryOrderByDTO {
  @IsOptional()
  @Max(50)
  @Min(1)
  @ApiProperty({ example: 1, type: 'integer', format: 'int64' })
  @Transform(({ value }) => (isNaN(parseInt(value)) ? 20 : parseInt(value)))
  limit?: number = 20;

  @IsOptional()
  @Min(0)
  @ApiProperty({ example: 0, type: 'integer', format: 'int64' })
  @Transform(({ value }) => (isNaN(parseInt(value)) ? 0 : parseInt(value)))
  offset?: number = 0;
}
