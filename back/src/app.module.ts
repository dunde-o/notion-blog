import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseRootUrl } from '@src/settings/database';

@Module({
  imports: [MongooseModule.forRoot(getMongooseRootUrl())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
