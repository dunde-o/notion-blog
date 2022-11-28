import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useEnv } from './utils/environment';
import { winstonLogger } from '@src/utils/winston';

useEnv();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: winstonLogger });
  await app.listen(3000);
}

bootstrap();
