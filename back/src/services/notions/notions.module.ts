import { Module } from '@nestjs/common';
import { NotionsService } from './notions.service';
import { NotionsController } from '@services/notions/notions.controller';

@Module({
  controllers: [NotionsController],
  providers: [NotionsService],
})
export class NotionsModule {}
