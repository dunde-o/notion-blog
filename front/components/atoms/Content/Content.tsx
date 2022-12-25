import React, { CSSProperties } from "react";
import { ContentProps } from "./Content.type";
import styles from "./Content.module.scss";
import classNames from "classnames";

const Content: React.FC<ContentProps> = (props) => {
  const { direction = "vertical", size, children } = props;

  return (
    <section
      className={classNames(styles.Content, styles[direction])}
      style={
        {
          "--content--width":
            typeof size?.width === "number" ? `${size.width}px` : "auto",
          "--content--height":
            typeof size?.height === "number" ? `${size.height}px` : "auto",
        } as CSSProperties
      }
    >
      {children}
    </section>
  );
};

Content.displayName = "Content";

export default Content;
