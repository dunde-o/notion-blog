import React from "react";
import { Logo, RouterButton } from "@components/atoms";
import { NavLogoProps } from "./NavLogo.type";
import styles from "./NavLogo.module.scss";
import { DEFAULT_PATH } from "@common/constants/path";

const NavLogo: React.FC<NavLogoProps> = (props) => {
  const { mode } = props;
  return (
    <span className={styles.NavLogo}>
      <RouterButton path={DEFAULT_PATH}>
        <Logo mode={mode} />
      </RouterButton>
    </span>
  );
};

NavLogo.displayName = "NavLogo";

export default NavLogo;
