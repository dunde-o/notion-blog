import { Main } from "@components/templates";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, data } = useQuery("PostPreview", async () => {
    const response = await fetch("api/posts", { method: "get" });
    return response.json();
  });

  if (!isLoading) {
    console.log(data);
  }

  return (
    <Main
      bannerMessage={"Dunde's notion blog"}
      postData={data}
      isLoading={isLoading}
    />
  );
}
