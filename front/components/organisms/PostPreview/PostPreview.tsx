import React, { ReactNode } from "react";
import { PostPreviewProps } from "./PostPreview.type";
import styles from "./PostPreview.module.scss";
import { PostCard } from "@components/molecules";
import BlankPreview from "./shared/BlankPreview";
import PostsRouterButton from "./shared/PostsRouterButton";
import LoadingPreview from "@components/organisms/PostPreview/shared/LoadingPreview";

const MAX_POST_DATA = 9;

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const { postData, isLoading } = props;

  const wrapComponent = (child: ReactNode) => (
    <article className={styles.PostPreview}>{child}</article>
  );

  if (isLoading === true) {
    return wrapComponent(<LoadingPreview />);
  }

  if (postData == null) {
    return wrapComponent(<BlankPreview />);
  }

  if (postData.length > MAX_POST_DATA) {
    const newData = [...postData];
    newData.length = MAX_POST_DATA;

    return wrapComponent([
      ...newData.map((postData, index) => (
        <PostCard key={index} data={postData} />
      )),
      <PostsRouterButton key="postRouterButton" />,
    ]);
  }

  return wrapComponent(
    postData.map((data, index) => <PostCard key={index} data={data} />)
  );
};

PostPreview.displayName = "PostPreview";

export default PostPreview;
