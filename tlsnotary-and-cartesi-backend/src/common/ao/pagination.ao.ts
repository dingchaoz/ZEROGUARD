import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsNumberString, IsPositive, Max, Min } from 'class-validator';

export class PaginationAO {
  @Expose()
  @Transform(({ value }) => parseInt(value))
  @IsPositive()
  @IsNumberString()
  @ApiProperty({ example: 0 })
  offset: number;

  @Expose()
  @Transform(({ value }) => parseInt(value))
  @Max(50)
  @Min(1)
  @IsNumberString()
  @ApiProperty({ example: 2 })
  limit: number;

  @Expose()
  @ApiProperty({ example: 2 })
  totalCount: number;
}
