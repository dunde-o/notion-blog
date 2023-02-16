import React from "react";
import styles from "./Posts.module.scss";
import {
  Footer,
  Navigator,
  PostList,
  SwitchScreen,
} from "@components/organisms";
import { Content, ScreenObserver } from "@components/atoms";
import { PostsProps } from "./Posts.type";
import { usePostData } from "./shared/utils";

const Posts: React.FC<PostsProps> = (props) => {
  const {
    postData,
    isLoading = false,
    isFetching = false,
    requestNextPostData,
  } = props;
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();

  return (
    <main onScroll={scrollHandler} className={styles.Posts}>
      <Navigator ref={navRef} position={navPosition}></Navigator>
      <SwitchScreen />
      <Content>
        <Content.ContentTitle title="POST" />
        <PostList
          postData={postData}
          isLoading={isLoading}
          isFetching={isFetching}
        />
        <ScreenObserver
          onInScreen={requestNextPostData}
          wait={isLoading || isFetching}
        />
      </Content>
      <Footer />
    </main>
  );
};

Posts.displayName = "Posts";

export default Object.assign(Posts, { usePostData });
