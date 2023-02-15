import { RequestType } from "@common/api/type";
import { useInfiniteQuery } from "react-query";
import { getQueryKey } from "@common/api/util";
import { clientFetch } from "@common/utils/message";
import {
  NotionPage,
  NotionPages,
} from "@local/shared/dist/types/models/notion";
import { QUERY_OPTION } from "@common/api/const";
import { useCallback } from "react";

export const usePostData = (query?: RequestType) => {
  const queryKey = getQueryKey("Posts", query);

  const { isLoading, isFetching, data, fetchNextPage } = useInfiniteQuery(
    queryKey,
    ({ pageParam: nextCursor }) =>
      clientFetch<NotionPages>("api/posts", "GET", {
        param: { nextCursor, ...query },
      }),
    {
      ...QUERY_OPTION.DEFAULT,
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
    postData: data?.pages.reduce(
      (list, current) => [...list, ...(current?.results ?? [])],
      [] as NotionPage[]
    ),
    isLoading,
    isFetching,
    requestNextPostData,
  };
};
