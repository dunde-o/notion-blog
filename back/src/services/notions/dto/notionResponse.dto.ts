import { NotionPageDto } from '@services/notions/dto/notionPage.dto';
import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionPages } from '@local/shared/dist/types/models/notion';

export class NotionResponseDto implements NotionPages {
  results: NotionPageDto[];
  hasMore: boolean;
  nextCursor?: string;

  constructor(notionDtoArgs: QueryDatabaseResponse) {
    const { results, has_more, next_cursor } = notionDtoArgs;

    this.results = results.filter((it) => 'created_time' in it).map((it: PageObjectResponse) => new NotionPageDto(it));
    this.hasMore = has_more ?? false;
    this.nextCursor = next_cursor;
  }
}
