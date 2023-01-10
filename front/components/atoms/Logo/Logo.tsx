import React from 'react';
import styles from './Logo.module.scss';
import { LogoProps } from './Logo.type';
import classNames from 'classnames';

const Logo: React.FC<LogoProps> = ({ mode }) => {
  return (
    <span className={classNames(styles.Logo, mode == null ? null : styles[mode])}>
      <span>{'<Dunde />'}</span>
    </span>
  );
};

Logo.displayName = 'Logo';

export default Logo;
