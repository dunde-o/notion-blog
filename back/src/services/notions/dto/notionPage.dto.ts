import {
  MultiSelectPropertyItemObjectResponse,
  PageObjectResponse,
  RichTextPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionPage } from '@local/shared/dist/types/models/notion';

export class NotionPageHead {
  category: string;
  description: string;
  tag: string[];
  title: string;

  constructor(properties: PageObjectResponse['properties']) {
    const {
      category,
      description,
      tag,
      title,
    }: {
      category?: Omit<SelectPropertyItemObjectResponse, 'object'>;
      description?: Omit<RichTextPropertyItemObjectResponse, 'object'>;
      tag?: Omit<MultiSelectPropertyItemObjectResponse, 'object'>;
      title?: Omit<TitlePropertyItemObjectResponse, 'object'>;
    } = properties;

    this.category = category?.select.name ?? '';
    this.description = description?.rich_text.plain_text ?? '';
    this.tag = tag?.multi_select.map((it) => it.name) ?? [];
    this.title = title?.title.plain_text ?? '';
  }
}

export class NotionPageDto implements NotionPage {
  createTime: Date;
  updateTime: Date;
  coverImgUrl: string;
  iconImgUrl: string;
  pageHead: NotionPageHead;
  pageLink: string;

  constructor(pageObjectResponse: PageObjectResponse) {
    const { created_time, last_edited_time, cover, icon, properties, url } = pageObjectResponse;

    this.createTime = new Date(created_time);
    this.updateTime = new Date(last_edited_time);
    this.coverImgUrl = cover.type === 'external' ? cover.external.url : cover.file.url;
    this.iconImgUrl = icon.type === 'external' ? icon.external.url : icon.type === 'file' ? icon.file.url : '';
    this.pageHead = new NotionPageHead(properties);
    this.pageLink = url;
  }
}
