import React from "react";
import styles from "./DefaultSwitch.module.scss";
import { DefaultSwitchProps } from "./DefaultSwitch.type";
import LoadingImage from "@components/atoms/LoadImage/LoadImage";
import classNames from "classnames";
import { IMG_SIZES } from "@common/constants/image";

const DefaultSwitch: React.FC<DefaultSwitchProps> = (props) => {
  const { state = true, icon } = props;
  return (
    <div
      className={classNames(
        styles.DefaultSwitch,
        state ? styles.default : styles.other
      )}
    >
      {icon?.default == null ? null : typeof icon.default === "string" ? (
        <span className={styles["default-icon"]}>{icon.default}</span>
      ) : (
        <LoadingImage
          className={styles["default-icon"]}
          {...icon.default}
          {...IMG_SIZES.ICON}
        />
      )}
      {icon?.other == null ? null : typeof icon.other === "string" ? (
        <span className={styles["other-icon"]}>{icon.other}</span>
      ) : (
        <LoadingImage
          className={styles["other-icon"]}
          {...icon.other}
          {...IMG_SIZES.ICON}
        />
      )}
    </div>
  );
};

DefaultSwitch.displayName = "DefaultSwitch";

export default DefaultSwitch;
