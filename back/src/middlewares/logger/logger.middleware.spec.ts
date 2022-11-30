import { LoggerMiddleware } from './logger.middleware';
import { Logger } from '@nestjs/common';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware(Logger)).toBeDefined();
  });
});
