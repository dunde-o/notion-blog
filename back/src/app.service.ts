import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //@todo 테스트용 삭제예정
  getHello(): string {
    return 'Hello World!';
  }
}
