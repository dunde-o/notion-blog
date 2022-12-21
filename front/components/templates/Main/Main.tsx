import React from "react";
import { MainProps } from "./Main.type";
import styles from "./Main.module.scss";
import { Navigator } from "@components/organisms";
import { Banner } from "@components/atoms";

const Main: React.FC<MainProps> = (props) => {
  const { bannerMessage } = props;
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();
  return (
    <main onScroll={scrollHandler} className={styles.Main}>
      <Navigator ref={navRef} position={navPosition} />
      <Banner message={bannerMessage} />
    </main>
  );
};

Main.displayName = "Main";

export default Main;
