import React from "react";
import styles from "./SwitchScreen.module.scss";
import { ScreenModeSwitch } from "@components/molecules/Switches";

const SwitchScreen: React.FC = () => {
  return (
    <div className={styles.SwitchScreen}>
      <ScreenModeSwitch />
    </div>
  );
};

SwitchScreen.displayName = "SwitchScreen";

export default SwitchScreen;
