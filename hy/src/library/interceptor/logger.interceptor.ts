import { Logger } from '@nestjs/common';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestId = Date.now().toString();
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const method = request.method;
    const url = request.url;
    const controllerName = context.getClass().name; // Get controller name
    const handlerName = context.getHandler().name; // Get handler (method) name
    const now = Date.now();

    this.logger.log(
      `Request: ID[ ${requestId} ] / ${method} ${url}`,
      `RequestData:ID[ ${requestId} ] / ${JSON.stringify({
        headers: request.headers,
        body: request.body,
        controller: controllerName,
        handler: handlerName,
      })}`,
    );

    return next.handle().pipe(
      tap((data) => {
        const responseTime = Date.now() - now;
        this.logger.log(
          `Response: ID[ ${requestId} ] / ${method} ${url} ${response.statusCode} ${responseTime}ms`,
          `ResponseData: ID[ ${requestId} ] / ${JSON.stringify({
            headers: response.getHeaders(),
            data: data,
            controller: controllerName,
            handler: handlerName,
          })}`,
        );
      }),
    );
  }
}
