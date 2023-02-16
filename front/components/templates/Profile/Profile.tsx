import React from "react";
import styles from "./Profile.module.scss";
import {
  Footer,
  Navigator,
  ProfileContent,
  SwitchScreen,
} from "@components/organisms";
import { Content } from "@components/atoms";

const Profile: React.FC = () => {
  const { navRef, navPosition, scrollHandler } = Navigator.useNavigatorScroll();
  return (
    <main onScroll={scrollHandler} className={styles.Profile}>
      <Navigator ref={navRef} position={navPosition} />
      <SwitchScreen />
      <Content>
        <Content.ContentTitle title="PROFILE" />
        <ProfileContent />
      </Content>
      <Footer />
    </main>
  );
};

Profile.displayName = "Profile";

export default Profile;
