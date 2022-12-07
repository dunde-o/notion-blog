import React from 'react';
import Logo from '@components/atoms/Logo/Logo';
import { NavLogoProps } from './NavLogo.type';
import Link from 'next/link';
import { DEFAULT_PATH } from '@common/constants/path';
import styles from './NavLogo.module.scss';

const NavLogo: React.FC<NavLogoProps> = (props) => {
  const { mode } = props;
  return (
    <Link href={DEFAULT_PATH} className={styles.NavLogo}>
      <Logo mode={mode} />
    </Link>
  );
};

NavLogo.displayName = 'NavLogo';

export default NavLogo;
