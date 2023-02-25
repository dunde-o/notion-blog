import { RequestType } from "@common/api/type";
import { InfiniteData, useInfiniteQuery } from "react-query";
import { clientFetch } from "@common/utils/message";
import {
  NotionPage,
  NotionPages,
} from "@local/shared/dist/types/models/notion";
import { useCallback } from "react";

export const parsingInfinitePostData = (
  infinitePostData: InfiniteData<NotionPages | undefined> | undefined
): NotionPage[] => {
  return (
    infinitePostData?.pages?.reduce(
      (list, current) => [...list, ...(current?.results ?? [])],
      [] as NotionPage[]
    ) ?? []
  );
};

export const usePostData = (query?: RequestType) => {
  const queryKey = ["Posts", query];

  const { isLoading, isFetching, data, fetchNextPage } = useInfiniteQuery(
    queryKey,
    ({ pageParam: nextCursor }) =>
      clientFetch<NotionPages>("api/posts", "GET", {
        param: { nextCursor, ...query },
      }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.nextCursor;
      },
    }
  );

  const requestNextPostData = useCallback(() => {
    if (
      isLoading ||
      isFetching ||
      data == null ||
      [...data?.pages].pop()?.hasMore == false
    ) {
      return;
    }
    fetchNextPage();
  }, [isLoading, isFetching, data, fetchNextPage]);

  return {
    postData: parsingInfinitePostData(data),
    isLoading,
    isFetching,
    requestNextPostData,
  };
};
