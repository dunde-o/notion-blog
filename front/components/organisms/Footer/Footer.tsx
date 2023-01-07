import React from "react";
import { FooterProps } from "./Footer.type";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { LINK } from "@common/constants/link";
import { Content, DivideLine } from "@components/atoms";
import { SourceInfoPageButton } from "@components/molecules/Modals";

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.Footer}>
      <DivideLine direction="horizontal" margin={25} />
      <Content className={styles.content}>
        <div className={styles.list}>
          <h4>Info</h4>
          <SourceInfoPageButton className={styles.button}>
            source info
          </SourceInfoPageButton>
        </div>
        <div className={styles.list}>
          <h4>Link</h4>
          <Link
            className={styles.button}
            href={LINK.MY_GITHUB_SOURCE}
            target="_blank"
          >
            view github source
          </Link>
        </div>
        <div className={styles.description}>@ Create by Dunde</div>
      </Content>
      <DivideLine direction="horizontal" margin={25} />
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
