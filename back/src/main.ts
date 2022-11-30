import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useEnv } from './utils/environment';
import { winstonLogger } from '@src/utils/winston';
import { HttpExceptionFilter } from '@filters/exceptions/http-exception/http-exception.filter';
import { HttpInterceptor } from '@interceptors/http/http.interceptor';

useEnv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: winstonLogger });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new HttpInterceptor());
  await app.listen(3000);
}

bootstrap();
