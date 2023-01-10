import React from "react";
import _Head from "next/head";
import { CustomHeadProps } from "./CustomHead.type";
import { DEFAULT_PATH, PATH_TO_TITLE } from "@common/constants/path";
import { getPathToHeadInfo } from "@common/utils/path";

const CustomHead: React.FC<CustomHeadProps> = (props) => {
  const {
    title = PATH_TO_TITLE[DEFAULT_PATH],
    path = DEFAULT_PATH,
    children,
  } = props;
  const { name, description } = getPathToHeadInfo(path);

  return (
    <_Head>
      <title>{`${name} | ${title}`}</title>
      <meta name="description" content={description} />
      {children}
    </_Head>
  );
};

CustomHead.displayName = "CustomHead";

export default CustomHead;
