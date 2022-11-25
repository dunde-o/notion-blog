import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useEnv } from './settings/environment';

async function bootstrap() {
  useEnv();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
