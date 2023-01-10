import React from "react";
import { TextLink } from "@components/atoms";
import { NavMenuProps } from "./NavMenu.type";
import styles from "./NavMenu.module.scss";
import { PATH } from "@common/constants/path";

const NavMenu: React.FC<NavMenuProps> = (props) => {
  const { mode } = props;
  return (
    <div className={styles.NavMenu}>
      <TextLink mode={mode} href={PATH.MAIN}>
        메인
      </TextLink>
      <TextLink mode={mode} href={PATH.POSTS}>
        글 보기
      </TextLink>
      <TextLink mode={mode} href={PATH.PROFILE}>
        프로필
      </TextLink>
    </div>
  );
};

NavMenu.displayName = "NavMenu";

export default NavMenu;
