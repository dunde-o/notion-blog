import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseRootUrl } from '@src/utils/database';
import { LoggerMiddleware } from '@middlewares/logger/logger.middleware';
import { NotionsModule } from '@services/notions/notions.module';

@Module({
  imports: [MongooseModule.forRoot(getMongooseRootUrl()), NotionsModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
