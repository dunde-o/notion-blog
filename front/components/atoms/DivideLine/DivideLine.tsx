import React, { CSSProperties } from "react";
import { DivideLineProps } from "./DivideLine.type";
import styles from "./DivideLine.module.scss";
import classNames from "classnames";

const DivideLine: React.FC<DivideLineProps> = (props) => {
  const { direction = "vertical", margin = 0, thick = 1, length } = props;
  return (
    <div
      className={classNames(styles.DivideLine, styles[direction])}
      style={
        {
          "--divide-line--white-space": `${margin}px`,
          "--divide-line--thick": `${thick}px`,
          "--divide-line--length":
            typeof length === "number" ? `${length}px` : length,
        } as CSSProperties
      }
    />
  );
};

DivideLine.displayName = "DivideLine";

export default DivideLine;
