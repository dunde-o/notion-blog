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

const Posts: React.FC<PostsProps> = (props) => {
  const { postData, isLoading = false, requestPostData } = props;
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();

  return (
    <main onScroll={scrollHandler} className={styles.Posts}>
      <Navigator ref={navRef} position={navPosition}></Navigator>
      <SwitchScreen />
      <Content>
        <PostList postData={postData} isLoading={isLoading} />
        <ScreenObserver onInScreen={requestPostData} isLoading={isLoading} />
      </Content>
      <Footer />
    </main>
  );
};

Posts.displayName = "Posts";

export default Posts;
