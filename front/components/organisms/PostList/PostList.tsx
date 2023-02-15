import React, { ReactNode } from "react";
import styles from "./PostList.module.scss";
import { PostListProps } from "./PostList.type";
import BlankPostList from "./shared/BlankPostList";
import { PostCard } from "@components/molecules";
import { MasonryGrid } from "@egjs/react-grid";

const PostList: React.FC<PostListProps> = (props) => {
  const { postData, isLoading = false, isFetching = false } = props;

  const wrapComponent = (child: ReactNode) => (
    <article className={styles.PostList}>
      <span className={styles.title}>POST</span>
      {child}
    </article>
  );

  if (postData == null || postData.length === 0 || isLoading) {
    return wrapComponent(<BlankPostList isLoading={isLoading} />);
  }

  return wrapComponent(
    <>
      <MasonryGrid
        className={styles.container}
        align="center"
        gap={20}
        defaultDirection="end"
      >
        {postData.map((data, index) => (
          <PostCard data={data} type="detail" key={index} />
        ))}
      </MasonryGrid>
      {isFetching ? <BlankPostList isLoading={true} /> : null}
    </>
  );
};

PostList.displayName = "PostList";

export default PostList;
