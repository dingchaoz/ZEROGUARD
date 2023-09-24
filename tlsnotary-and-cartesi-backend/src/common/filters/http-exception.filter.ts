import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ErrorDTO, ExceptionDTO } from '../dto/exception.dto';
import { CustomHttpException } from '../exceptions/custom-http-exception';
import { COMMON_EXCEPTION } from '../constants/exception.constant';
const { SERVICE_NAME } = process.env;
const {
  INTERNAL_SERVER_EXCEPTION,
  BAD_GATEWAY_EXCEPTION,
  NOT_FOUND_EXCEPTION,
} = COMMON_EXCEPTION;
import axios from 'axios';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const traceId = request.headers['x-b3-traceid'] || '';
    // const request = ctx.getRequest();
    if (exception instanceof CustomHttpException) {
      const status = exception.getStatus();
      const customHttpException = exception.getResponse() as ExceptionDTO;

      return response.status(status).json(
        ErrorDTO.plainToClass({
          serviceName: SERVICE_NAME,
          traceId,
          ...customHttpException,
        }),
      );
    }

    if (axios.isAxiosError(exception)) {
      if (exception.response) {
        return response
          .status(exception.response.status)
          .json(ErrorDTO.plainToClass(exception.response.data));
      } else {
        return response.status(HttpStatus.BAD_GATEWAY).json(
          ErrorDTO.plainToClass({
            serviceName: SERVICE_NAME,
            traceId,
            errorCode: BAD_GATEWAY_EXCEPTION.errorCode,
            status: BAD_GATEWAY_EXCEPTION.status,
            message: exception.message,
          }),
        );
      }
    }
    if (
      exception instanceof HttpException &&
      exception.getStatus() === HttpStatus.NOT_FOUND
    ) {
      return response.status(exception.getStatus()).json(
        ErrorDTO.plainToClass({
          serviceName: SERVICE_NAME,
          traceId,
          errorCode: NOT_FOUND_EXCEPTION.errorCode,
          status: exception.getStatus(),
          message: exception.message,
        }),
      );
    }
    // const { message } = exception;
    return response.status(INTERNAL_SERVER_EXCEPTION.status).json(
      ErrorDTO.plainToClass({
        serviceName: SERVICE_NAME,
        traceId,
        errorCode: INTERNAL_SERVER_EXCEPTION.errorCode,
        status: INTERNAL_SERVER_EXCEPTION.status,
        message:
          exception instanceof Error
            ? exception.message
            : `unknown ${exception}`,
      }),
    );
  }
}
