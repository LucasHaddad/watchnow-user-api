import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    type ExceptionBody = {
        statusCode: number,
        timestamp: string,
        path: string,
        message: string,
        stackTrace?: string,
    };

    const obj: ExceptionBody = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message
    };

    if (process.env.NODE_ENV === 'DEBUG') {
        obj.stackTrace = exception.stack;
    }

    response
      .status(status)
      .json(obj);
  }
}