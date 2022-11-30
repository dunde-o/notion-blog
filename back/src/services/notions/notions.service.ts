import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { notionClient, notionSecret } from '@src/utils/notion';
import { NotionResponseDto } from '@services/notions/dto/notionResponse.dto';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class NotionsService {
  async getAllNotionPage(nextCursor?: string): Promise<NotionResponseDto> {
    let response: QueryDatabaseResponse;
    try {
      response = await notionClient.databases.query({
        database_id: notionSecret.NOTION_DATABASE_ID,
        start_cursor: nextCursor,
      });
    } catch (error: unknown) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }

    return new NotionResponseDto(response);
  }
}
