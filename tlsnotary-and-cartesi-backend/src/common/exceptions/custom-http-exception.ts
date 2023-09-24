import { HttpException } from '@nestjs/common';
import { ExceptionDTO } from '../dto/exception.dto';

export class CustomHttpException extends HttpException {
  constructor(response: ExceptionDTO) {
    super(response, response.status);
  }
}
