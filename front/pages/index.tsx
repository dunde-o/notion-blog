import { Main } from "@components/templates";
import { useQuery } from "react-query";
import { NotionPages } from "@local/shared/dist/types/models/notion";
import { QUERY_OPTION } from "@common/api/const";
import { clientFetch } from "@common/utils/message";
import { useLayoutEffect } from "react";
import { loadLocalStorage } from "@common/utils/storage";

export default function Home() {
  const { isLoading, data } = useQuery(
    "PostPreview",
    () => clientFetch<NotionPages>("api/posts/simple", "GET"),
    QUERY_OPTION.DEFAULT
  );

  useLayoutEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <Main
      bannerMessage={"Dunde's notion blog"}
      postData={data?.results}
      isLoading={isLoading}
    />
  );
}
