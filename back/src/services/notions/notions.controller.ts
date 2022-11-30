import { Controller, Get, Query } from '@nestjs/common';
import { NotionsService } from '@services/notions/notions.service';
import { NotionResponseDto } from '@services/notions/dto/notionResponse.dto';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller('notions')
export class NotionsController {
  constructor(private readonly notionsService: NotionsService) {}

  @Get()
  @ApiImplicitQuery({
    name: 'nextCursor',
    required: false,
    type: String,
  })
  getAllNotionPage(@Query('nextCursor') nextCursor?: string): Promise<NotionResponseDto> {
    return this.notionsService.getAllNotionPage(nextCursor);
  }
}
