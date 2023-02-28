import React, { useState } from "react";
import Image from "next/image";
import { LoadImageProps } from "./LoadImage.type";
import styles from "./LoadImage.module.scss";
import classNames from "classnames";

const LoadingImage: React.FC<LoadImageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      className={classNames(props.className, {
        [styles["is-loading"]]: isLoading,
      })}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

LoadingImage.displayName = "LoadingImage";

export default LoadingImage;
