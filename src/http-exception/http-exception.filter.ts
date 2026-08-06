import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const request: Request = host.switchToHttp().getRequest();
    const status = exception.getStatus();
    const message = exception.getResponse();
    response.status(status).json({
      success: false,
      statusCode: status,
      message: message,
      timeStamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
