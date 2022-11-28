export interface NotionPage {
  createTime: Date;
  updateTime: Date;
  coverImgUrl: string;
  iconImgUrl: string;
  pageHead: {
    category: string;
    description: string;
    tag: string[];
    title: string;
  };
  pageLink: string;
}

export interface NotionPages {
  results: NotionPage[];
  hasMore: boolean;
  nextCursor?: string;
}
