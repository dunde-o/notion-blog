import { Test, TestingModule } from '@nestjs/testing';
import { NotionsService } from './notions.service';

describe('NotionsService', () => {
  let service: NotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionsService],
    }).compile();

    service = module.get<NotionsService>(NotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
