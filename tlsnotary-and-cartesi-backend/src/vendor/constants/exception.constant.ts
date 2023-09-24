import { ExceptionDTO } from '../../common/dto/exception.dto';
import { HttpStatus } from '@nestjs/common';

type USER_EXCEPTION_KEY = 'USER_NOT_EXIST_EXCEPTION';

export const USER_EXCEPTION: Record<USER_EXCEPTION_KEY, ExceptionDTO> = {
  USER_NOT_EXIST_EXCEPTION: {
    errorCode: '00000001',
    message: '不存在的使用者',
    status: HttpStatus.BAD_REQUEST,
  },
};
