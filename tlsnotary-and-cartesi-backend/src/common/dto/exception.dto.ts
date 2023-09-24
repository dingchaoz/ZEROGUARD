import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass } from 'class-transformer';

export class ExceptionDTO {
  @ApiProperty({ example: '00000001' })
  @Expose()
  errorCode: string;

  @ApiProperty({ example: 'Bad Request Exception' })
  @Expose()
  message: string;

  @ApiProperty({ example: '400' })
  @Expose()
  status: number;
}

export class ErrorDTO extends ExceptionDTO {
  @ApiProperty({ example: process.env.SERVICE_NAME })
  @Expose()
  serviceName: string;

  @ApiProperty({ example: 'dfagnblkf' })
  @Expose()
  traceId: string;
  static plainToClass(dto: ErrorDTO) {
    return plainToClass(ErrorDTO, dto);
  }
}

// export class ExceptionDTO {
//   @ApiProperty({ example: '' })
//   type: string;
//
//   @ApiProperty({ example: 'Bad Request Exception' })
//   message: string;
//
//   @ApiProperty({ example: '400' })
//   status: number;
//
//   errors: ErrorDTO[];
// }
//
// class ErrorDTO {
//   @ApiProperty({ example: '10000001' })
//   errorCode: string;
//
//   @ApiProperty({ example: '不存在的使用者' })
//   message: string;
//
//   @ApiProperty({
//     example: '請先用 GET/http://users 取得使用者確認使用者是否存在',
//   })
//   detail: string;
//
//   @ApiProperty({ example: '' })
//   help: string;
// }
