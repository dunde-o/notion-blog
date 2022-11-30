import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@todo 테스트용 삭제예정
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
