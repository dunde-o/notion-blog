import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { notionClient, notionSecret } from '@src/utils/notion';
import { NotionResponseDto } from '@services/notions/dto/notionResponse.dto';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { HttpFailResponseForm } from '@local/shared/dist/types/message/http';

@Injectable()
export class NotionsService {
  async getNotionPage(nextCursor?: string, tag?: string | string[], category?: string): Promise<NotionResponseDto> {
    let response: QueryDatabaseResponse;
    const filter = {
      and: [
        ...(tag != null
          ? typeof tag === 'string'
            ? [
                {
                  property: 'tag',
                  multi_select: {
                    contains: tag,
                  },
                },
              ]
            : tag.map((value) => ({ property: 'tag', multi_select: { contains: value } }))
          : []),
        ...(category != null ? [{ property: 'category', select: { equals: category } }] : []),
      ],
    };

    try {
      response = await notionClient.databases.query({
        database_id: notionSecret.NOTION_DATABASE_ID,
        start_cursor: nextCursor,
        page_size: 10,
        filter,
      });
    } catch (error: unknown) {
      throw new HttpException(
        {
          error,
          message: typeof error['code'] === 'string' ? error['code'] : 'unknown error.',
        } as HttpFailResponseForm['error'],
        HttpStatus.BAD_REQUEST,
      );
    }

    return new NotionResponseDto(response);
  }
}
