import React from "react";
import { Posts } from "@components/templates";
import { useRouter } from "next/router";

const PostsPage: React.FC = () => {
  const { query } = useRouter();
  const { postData, isLoading, isFetching, requestNextPostData } =
    Posts.usePostData(query);

  return (
    <Posts
      postData={postData}
      isLoading={isLoading}
      isFetching={isFetching}
      requestNextPostData={requestNextPostData}
    />
  );
};

PostsPage.displayName = "PostsPage";

export default PostsPage;
