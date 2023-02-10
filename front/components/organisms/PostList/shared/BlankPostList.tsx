import React from "react";
import styles from "./BlankPostList.module.scss";
import { MESSAGE } from "@common/constants/string";
import { BlankPostListProps } from "./BlankPostList.type";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";

const BlankPostList: React.FC<BlankPostListProps> = (props) => {
  const { isLoading } = props;

  if (isLoading == true) {
    return (
      <div className={styles.BlankPostList}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...IMG_SIZES.ICON} {...IMG_PROPS.LOADING} />
      </div>
    );
  }

  return <div className={styles.BlankPostList}>{MESSAGE.BLANK_POST}</div>;
};

BlankPostList.displayName = "BlankPostList";

export default BlankPostList;
