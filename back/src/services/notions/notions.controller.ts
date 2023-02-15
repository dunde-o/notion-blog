import { Controller, Get, Query } from '@nestjs/common';
import { NotionsService } from '@services/notions/notions.service';
import { NotionResponseDto } from '@services/notions/dto/notionResponse.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('notions')
export class NotionsController {
  constructor(private readonly notionsService: NotionsService) {}

  @Get()
  @ApiQuery({
    name: 'nextCursor',
    required: false,
    type: String,
  })
  @ApiQuery({ name: 'tag', required: false, type: String || Array })
  @ApiQuery({ name: 'category', required: false, type: String })
  getNotionPage(
    @Query('nextCursor') nextCursor?: string,
    @Query('tag') tag?: string | string[],
    @Query('category') category?: string,
  ): Promise<NotionResponseDto> {
    return this.notionsService.getNotionPage(nextCursor, tag, category);
  }
}
