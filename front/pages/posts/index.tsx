import React, { useCallback, useLayoutEffect, useState } from "react";
import { Posts } from "@components/templates";
import { useQuery } from "react-query";
import { clientFetch } from "@common/utils/message";
import {
  NotionPage,
  NotionPages,
} from "@local/shared/dist/types/models/notion";
import { QUERY_OPTION } from "@common/api/const";

const PostsPage: React.FC = () => {
  const [postData, setPostData] = useState<NotionPage[]>([]);
  const [notionPageInfo, setNotionPageInfo] = useState<
    Pick<NotionPages, "nextCursor" | "hasMore">
  >({
    nextCursor: undefined,
    hasMore: false,
  });

  const { isLoading, data, refetch } = useQuery(
    "PostPreview",
    () =>
      clientFetch<NotionPages>("api/posts", "GET", {
        param: { nextCursor: notionPageInfo.nextCursor },
      }),
    QUERY_OPTION.DEFAULT
  );

  useLayoutEffect(() => {
    if (data?.results == null) {
      return;
    }
    const { results, hasMore, nextCursor } = data;
    setPostData((state) => [...state, ...results]);
    setNotionPageInfo({ hasMore, nextCursor });
  }, [data]);

  const requestPostData = useCallback(() => {
    notionPageInfo.hasMore ? refetch() : null;
  }, [notionPageInfo, refetch]);

  return (
    <Posts
      postData={postData}
      isLoading={isLoading}
      requestPostData={requestPostData}
    />
  );
};

PostsPage.displayName = "PostsPage";

export default PostsPage;
