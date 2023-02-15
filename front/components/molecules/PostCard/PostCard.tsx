import React from "react";
import { PostCardProps } from "./PostCard.type";
import styles from "./PostCard.module.scss";
import { RouterButton } from "@components/atoms";
import { IMG_SIZES } from "@common/constants/image";
import LoadingImage from "@components/atoms/LoadImage/LoadImage";
import classNames from "classnames";
import { useRouter } from "next/router";
import { PATH } from "@common/constants/path";

const PostCard: React.FC<PostCardProps> = (props) => {
  const { path, data, type = "simple" } = props;
  const { iconImgUrl, pageHead, pageLink } = data;
  const router = useRouter();
  const createHandleTypeClick =
    (type: "category" | "tag", value: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      router.push({ pathname: PATH.POSTS, query: { [type]: value } });
    };
  return (
    <RouterButton path={path ?? pageLink}>
      <div className={classNames(styles.PostCard, styles[type])}>
        <LoadingImage
          className={styles.image}
          src={iconImgUrl}
          alt={pageHead.title}
          {...IMG_SIZES.SMALL}
        />
        <div className={styles.info}>
          <span className={styles.title}>{pageHead.title}</span>
          {type === "simple" ? null : (
            <div className={styles.type}>
              <div
                onClick={createHandleTypeClick("category", pageHead.category)}
                className={styles.category}
              >
                {pageHead.category}
              </div>
              <div className={styles.tags}>
                {pageHead.tag.map((tag, index) => (
                  <div
                    onClick={createHandleTypeClick("tag", tag)}
                    key={index}
                    className={styles.tags}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          )}
          <span className={styles.description}>{pageHead.description}</span>
        </div>
      </div>
    </RouterButton>
  );
};

PostCard.displayName = "PostCard";

export default PostCard;
