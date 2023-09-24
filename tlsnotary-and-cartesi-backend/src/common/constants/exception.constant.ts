import { ExceptionDTO } from '../dto/exception.dto';
import { HttpStatus } from '@nestjs/common';

type COMMON_EXCEPTION_KEY =
  | 'INTERNAL_SERVER_EXCEPTION'
  | 'BAD_GATEWAY_EXCEPTION'
  | 'PIPE_VALID_EXCEPTION'
  | 'NOT_FOUND_EXCEPTION';

export const COMMON_EXCEPTION: Record<COMMON_EXCEPTION_KEY, ExceptionDTO> = {
  INTERNAL_SERVER_EXCEPTION: {
    errorCode: '99999999',
    message: '',
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  BAD_GATEWAY_EXCEPTION: {
    errorCode: '99999998',
    message: '',
    status: HttpStatus.BAD_GATEWAY,
  },
  PIPE_VALID_EXCEPTION: {
    errorCode: '99999997',
    message: '',
    status: HttpStatus.BAD_REQUEST,
  },
  NOT_FOUND_EXCEPTION: {
    errorCode: '99999996',
    message: '',
    status: HttpStatus.NOT_FOUND,
  },
};
