import React, { ReactNode } from "react";
import { PostPreviewProps } from "./PostPreview.type";
import styles from "./PostPreview.module.scss";
import { PostCard } from "@components/molecules";
import BlankPreview from "./shared/BlankPreview";
import PostsRouterButton from "./shared/PostsRouterButton";

const MAX_POST_DATA = 9;

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const { data } = props;

  const wrapComponent = (child: ReactNode) => (
    <article className={styles.PostPreview}>{child}</article>
  );

  if (data == null) {
    return wrapComponent(<BlankPreview />);
  }

  if (data.length > MAX_POST_DATA) {
    const newData = [...data];
    newData.length = MAX_POST_DATA;

    return wrapComponent([
      ...newData.map((postData, index) => <PostCard key={index} data={postData} />),
      <PostsRouterButton key="postRouterButton" />,
    ]);
  }

  return wrapComponent(
    data.map((postData, index) => <PostCard key={index} data={postData} />)
  );
};

PostPreview.displayName = "PostPreview";

export default PostPreview;
