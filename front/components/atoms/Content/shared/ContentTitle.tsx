import React from "react";
import styles from "./ContentTitle.module.scss";
import { ContentTitleProps } from "./ContentTitle.type";

const ContentTitle: React.FC<ContentTitleProps> = ({ title }) => {
  return <span className={styles.ContentTitle}>{title}</span>;
};

ContentTitle.displayName = "ContentTitle";

export default ContentTitle;
