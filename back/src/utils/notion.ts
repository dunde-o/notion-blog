import { useEnv } from '@src/utils/environment';
import { Client } from '@notionhq/client';

useEnv();

export type NotionSecret = Pick<Env, 'NOTION_KEY' | 'NOTION_DATABASE_ID'>;

export const notionSecret: NotionSecret = {
  NOTION_KEY: process.env.NOTION_KEY,
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
};

export const notionClient = new Client({ auth: notionSecret.NOTION_KEY });
