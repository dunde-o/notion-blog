import React from "react";
import styles from "./TextList.module.scss";
import { TextListProps } from "./TextList.type";
import classNames from "classnames";

const TextList: React.FC<TextListProps> = (props) => {
  const { textList, textOption, className, ...rest } = props;
  return (
    <ul {...rest} className={classNames(styles.TextList, className)}>
      {Object.entries(textList).map(([key, value], index) => (
        <li key={index}>
          <span className={styles["text-key"]}>{`${
            textOption?.marker == null
              ? "• "
              : textOption.marker == false
              ? ""
              : textOption.marker + " "
          }${key} : `}</span>
          <span className={styles["text-value"]}>{value.description}</span>
        </li>
      ))}
    </ul>
  );
};

TextList.displayName = "TextList";

export default TextList;
