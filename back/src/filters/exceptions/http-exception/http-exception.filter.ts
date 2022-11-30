import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpFailResponseForm } from '@local/shared/dist/types/message/http';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const { path } = context.getRequest<Request>();
    const res = context.getResponse<Response<HttpFailResponseForm>>();
    const status = exception.getStatus();
    const error = exception.getResponse();

    res.status(status).json({
      success: false,
      path,
      timeStamp: new Date(),
      error: typeof error === 'string' ? { message: error } : { message: 'unknown error.', ...error },
    });
  }
}
