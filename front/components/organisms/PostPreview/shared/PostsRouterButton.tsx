import React from "react";
import styles from "./PostsRouterButton.module.scss";
import { RouterButton } from "@components/atoms";
import { PATH } from "@common/constants/path";
import { MESSAGE } from "@common/constants/string";

const PostsRouterButton: React.FC = () => {
  return (
    <RouterButton className={styles.PostsRouterButton} path={PATH.POSTS}>
      {MESSAGE.GO_POSTS}
      <span className={styles.arrow}>►</span>
    </RouterButton>
  );
};

PostsRouterButton.displayName = "PostsRouterButton";

export default PostsRouterButton;
