import React from "react";
import { BannerProps } from "./Banner.type";
import styles from "./Banner.module.scss";

const Banner: React.FC<BannerProps> = (props) => {
  const { message } = props;
  return <div className={styles.Banner}>{message}</div>;
};

Banner.displayName = "Banner";

export default Banner;
