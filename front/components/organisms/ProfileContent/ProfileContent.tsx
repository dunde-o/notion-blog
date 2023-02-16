import React from "react";
import styles from "./ProfileContent.module.scss";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";
import { TextList } from "@components/atoms";
import { PROFILE } from "@common/constants/profile";

const ProfileContent: React.FC = () => {
  return (
    <div className={styles.ProfileContent}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        className={styles["profile-image"]}
        {...IMG_PROPS.PROFILE}
        {...IMG_SIZES.LARGE}
      />
      <TextList
        className={styles["text-list"]}
        textList={PROFILE.PROFILE_DESCRIPTION_TO_TEXT_LIST}
      />
    </div>
  );
};

ProfileContent.displayName = "ProfileContent";

export default ProfileContent;
