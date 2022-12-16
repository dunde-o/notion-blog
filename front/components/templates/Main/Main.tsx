import React from "react";
import { MainProps } from "./Main.type";
import styles from "./Main.module.scss";
import { Navigator } from "@components/organisms";

const Main: React.FC<MainProps> = () => {
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();

  return (
    <main onScroll={scrollHandler} className={styles.Main}>
      <Navigator ref={navRef} position={navPosition} />
    </main>
  );
};

Main.displayName = "Main";

export default Main;
