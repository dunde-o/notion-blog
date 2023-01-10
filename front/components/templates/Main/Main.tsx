import React from "react";
import { MainProps } from "./Main.type";
import styles from "./Main.module.scss";
import { Footer, Navigator, PostPreview } from "@components/organisms";
import { Banner, Content, DivideLine } from "@components/atoms";
import { DivideLineProps } from "@components/atoms/DivideLine/DivideLine.type";

const Main: React.FC<MainProps> = (props) => {
  const { bannerMessage, postData, isLoading } = props;
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();

  const divideLineProps: DivideLineProps = {
    direction: "horizontal",
    margin: 50,
    thick: 1,
  };

  return (
    <main onScroll={scrollHandler} className={styles.Main}>
      <Navigator ref={navRef} position={navPosition} />
      <Content>
        <Banner message={bannerMessage} />
        <DivideLine {...divideLineProps} />
        <PostPreview postData={postData} isLoading={isLoading} />
        <DivideLine {...divideLineProps} />
      </Content>
      <Footer />
    </main>
  );
};

Main.displayName = "Main";

export default Main;
