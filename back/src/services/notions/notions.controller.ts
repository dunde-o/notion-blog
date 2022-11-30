import { Controller, Get, Query } from '@nestjs/common';
import { NotionsService } from '@services/notions/notions.service';
import { NotionResponseDto } from '@services/notions/dto/notionResponse.dto';

@Controller('notions')
export class NotionsController {
  constructor(private readonly notionsService: NotionsService) {}

  @Get()
  getAllNotionPage(@Query('nextCursor') nextCursor?: string): Promise<NotionResponseDto> {
    return this.notionsService.getAllNotionPage(nextCursor);
  }
}
