import React from "react";
import { TextLinkProps } from "./TextLink.type";
import styles from "./TextLink.module.scss";
import Link from "next/link";
import classNames from "classnames";

const TextLink: React.FC<TextLinkProps> = (props) => {
  const { href, width, mode, text, children } = props;
  return (
    <span
      className={classNames(
        styles.TextLink,
        mode == null ? null : styles[mode]
      )}
      style={{ width }}
    >
      <Link href={href}>{text ?? children ?? ""}</Link>
    </span>
  );
};

TextLink.displayName = "TextLink";

export default TextLink;
