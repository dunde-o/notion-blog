import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useEnv } from './utils/environment';
import { winstonLogger } from '@src/utils/winston';
import { HttpExceptionFilter } from '@filters/exceptions/http-exception/http-exception.filter';
import { HttpInterceptor } from '@interceptors/http/http.interceptor';
import { setupSwagger } from '@src/utils/swagger';

useEnv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: winstonLogger });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new HttpInterceptor());
  setupSwagger(app);
  await app.listen(8000);
}

bootstrap();
