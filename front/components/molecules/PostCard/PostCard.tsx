import React from "react";
import { PostCardProps } from "./PostCard.type";
import styles from "./PostCard.module.scss";
import { RouterButton } from "@components/atoms";
import { IMG_SIZES } from "@common/constants/image";
import LoadingImage from "@components/atoms/LoadImage/LoadImage";

const PostCard: React.FC<PostCardProps> = (props) => {
  const { path, data } = props;
  const { iconImgUrl, pageHead, pageLink } = data;
  return (
    <RouterButton path={path ?? pageLink}>
      <div className={styles.PostCard}>
        <LoadingImage
          className={styles.image}
          src={iconImgUrl}
          alt={pageHead.title}
          {...IMG_SIZES.SMALL}
        />
        <div className={styles.info}>
          <span className={styles.title}>{pageHead.title}</span>
          <span className={styles.description}>{pageHead.description}</span>
        </div>
      </div>
    </RouterButton>
  );
};

PostCard.displayName = "PostCard";

export default PostCard;
