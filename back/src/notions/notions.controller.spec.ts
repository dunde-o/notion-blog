import { Test, TestingModule } from '@nestjs/testing';
import { NotionsController } from './notions.controller';

describe('NotionsController', () => {
  let controller: NotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotionsController],
    }).compile();

    controller = module.get<NotionsController>(NotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
