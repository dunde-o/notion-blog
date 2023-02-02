import React from "react";
import Image from "next/image";
import { LoadImageProps } from "./LoadImage.type";
import { IMG_PROPS } from "@common/constants/image";

const LoadingImage: React.FC<LoadImageProps> = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} placeholder="blur" blurDataURL={IMG_PROPS.LOADING.src} />
  );
};

LoadingImage.displayName = "LoadingImage";

export default LoadingImage;
