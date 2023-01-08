import { Main } from "@components/templates";
import { useQuery } from "react-query";
import { defaultFetch } from "@common/api/util";
import { NotionPage } from "@local/shared/dist/types/models/notion";
import { QUERY_OPTION } from "@common/api/const";

export default function Home() {
  const { isLoading, data } = useQuery(
    "PostPreview",
    () => defaultFetch<NotionPage[]>("api/posts", "GET"),
    QUERY_OPTION.DEFAULT
  );

  return (
    <Main
      bannerMessage={"Dunde's notion blog"}
      postData={data}
      isLoading={isLoading}
    />
  );
}
