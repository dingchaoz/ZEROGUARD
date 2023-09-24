import { OrderByEnum } from '../enum/order.enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryOrderByDTO {
  @IsOptional()
  @IsEnum(OrderByEnum)
  @ApiProperty({
    example: OrderByEnum.DESC,
  })
  orderBy?: OrderByEnum = OrderByEnum.DESC;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'updatedAt',
  })
  sortBy?: string = 'updatedAt';
}
