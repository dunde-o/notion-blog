import { Main } from "@components/templates";
import { useQuery } from "react-query";
import { NotionPages } from "@local/shared/dist/types/models/notion";
import { clientFetch } from "@common/utils/message";

export default function Home() {
  const { isLoading, data } = useQuery(["PostPreview"], () =>
    clientFetch<NotionPages>("api/posts/simple", "GET")
  );

  return (
    <Main
      bannerMessage={"Dunde's notion blog"}
      postData={data?.results}
      isLoading={isLoading}
    />
  );
}
