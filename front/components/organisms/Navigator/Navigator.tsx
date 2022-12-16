import React from "react";
import { NavigatorProps } from "./Navigator.type";
import styles from "./Navigator.module.scss";
import { NavLogo, NavMenu } from "@components/molecules";
import classNames from "classnames";
import { useNavigatorScroll } from "./shared/utils";

const Navigator = React.forwardRef<HTMLElement, NavigatorProps>(
  (props, ref) => {
    const { mode, position } = props;
    return (
      <nav
        ref={ref}
        className={classNames(
          styles.Navigator,
          position === "fixed" ? styles.isFixed : styles.isAbsolute
        )}
      >
        <div className={styles.NavLeft}>
          <NavLogo mode={mode} />
        </div>
        <div className={styles.NavRight}>
          <NavMenu mode={mode} />
        </div>
      </nav>
    );
  }
);

Navigator.displayName = "Navigator";

export default Object.assign(Navigator, {
  useNavigatorScroll: useNavigatorScroll,
});
