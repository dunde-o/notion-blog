import { Injectable } from '@nestjs/common';
import { notionClient, notionSecret } from '@src/utils/notion';
import { NotionResponseDto } from '@src/notions/dto/notionResponse.dto';

@Injectable()
export class NotionsService {
  async getAllNotionPage(nextCursor?: string): Promise<NotionResponseDto> {
    const response = await notionClient.databases.query({
      database_id: notionSecret.NOTION_DATABASE_ID,
      start_cursor: nextCursor,
    });

    return new NotionResponseDto(response);
  }
}
