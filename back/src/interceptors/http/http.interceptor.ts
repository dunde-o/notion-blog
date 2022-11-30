import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Request } from 'express';
import { HttpSuccessResponseForm } from '@local/shared/dist/types/message/http';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<HttpSuccessResponseForm<unknown>> {
    const http = context.switchToHttp();
    const { path } = http.getRequest<Request>();

    return next.handle().pipe(map((data: unknown) => ({ success: true, path, timeStamp: new Date(), data })));
  }
}
