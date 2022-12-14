import React from "react";
import { NavLeftProps } from "./Navigator.type";
import styles from "./Navigator.module.scss";
import { NavLogo, NavMenu } from "@components/molecules";

const Navigator: React.FC<NavLeftProps> = (props) => {
  const { mode } = props;
  return (
    <nav className={styles.Navigator}>
      <div className={styles.NavLeft}>
        <NavLogo mode={mode} />
      </div>
      <div className={styles.NavRight}>
        <NavMenu mode={mode} />
      </div>
    </nav>
  );
};

Navigator.displayName = "Navigator";

export default Navigator;
