import React from "react";
import styles from "./LoadingPreview.module.scss";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";
import Image from "next/image";

const LoadingPreview: React.FC = () => {
  return (
    <div className={styles.LoadingPreview}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...IMG_SIZES.ICON} {...IMG_PROPS.LOADING} />
    </div>
  );
};

LoadingPreview.displayName = "LoadingPreview";

export default LoadingPreview;
