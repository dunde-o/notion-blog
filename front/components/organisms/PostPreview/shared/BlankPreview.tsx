import React from "react";
import styles from "./BlankPreview.module.scss";
import { MESSAGE } from "@common/constants/string";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";

const BlankPreview: React.FC = () => {
  return (
    <div className={styles.BlankPreview}>
      <span className={styles.message}>{MESSAGE.BLANK_POST}</span>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        className={styles.image}
        {...IMG_SIZES.SMALL}
        {...IMG_PROPS.NOT_FOUND}
      />
    </div>
  );
};

BlankPreview.displayName = "BlankPreview";

export default BlankPreview;
