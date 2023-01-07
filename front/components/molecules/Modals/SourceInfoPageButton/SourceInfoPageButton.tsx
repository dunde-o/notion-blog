import React from "react";
import { SourceInfoPageProps } from "./SourceInfoPageButton.type";
import styles from "./SourceInfoPageButton.module.scss";
import { Modal } from "@components/atoms";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";
import Link from "next/link";

const Page: React.FC = () => {
  const linkComponent = (src: string) => (
    <Link href={src} target="_blank">
      바로가기
    </Link>
  );
  return (
    <article className={styles.Page}>
      <h5>* 모든 소스는 저작자의 요청에 따라 언제든 삭제될 수 있습니다.</h5>
      <section className={styles.images}>
        <h1>이미지</h1>
        <div>
          <Image {...IMG_SIZES.ICON} {...IMG_PROPS.CLOSE_X} />
          {linkComponent(
            "https://www.iconpacks.net/free-icon/close-cancel-10387.html"
          )}
        </div>
        <div>
          <Image {...IMG_SIZES.ICON} {...IMG_PROPS.NOT_FOUND} />
          {linkComponent(
            "https://www.flaticon.com/free-icon/no-data_7466140?term=no+data&page=1&position=3&origin=tag&related_id=7466140"
          )}
        </div>
        <div>
          <Image {...IMG_SIZES.ICON} {...IMG_PROPS.GITHUB} />
          {linkComponent(
            "https://www.flaticon.com/kr/free-icon/github-logo_25231"
          )}
        </div>
        <div>
          <Image {...IMG_SIZES.ICON} {...IMG_PROPS.SAMPLE} />
          {linkComponent(
            "https://www.istockphoto.com/kr/%EC%82%AC%EC%A7%84/%EC%83%98%ED%94%8C-%EB%A0%88%EB%93%9C-%EA%B7%B8%EB%9F%B0%EC%A7%80-%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%8A%A4%ED%85%9C%ED%94%84-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%9D%98-gm491520707-40120628"
          )}
        </div>
        <div>
          <Image {...IMG_SIZES.ICON} {...IMG_PROPS.SETTING} />
          {linkComponent(
            "https://www.flaticon.com/free-icon/setting_2572691?term=setting&page=7&position=73&origin=search&related_id=2572691"
          )}
        </div>
      </section>
      <section className={styles.fonts}>
        <h1>폰트</h1>
        <div>
          <span style={{ fontFamily: "BMHANNAPro" }}>한나체</span>
          {linkComponent("http://font.woowahan.com/hanna11yrs/")}
        </div>
        <div>
          <span style={{ fontFamily: "BMJUA" }}>주아체</span>
          {linkComponent("http://font.woowahan.com/jua/")}
        </div>
        <div>
          <span style={{ fontFamily: "Jalnan" }}>잘난체</span>
          {linkComponent("https://www.goodchoice.kr/font")}
        </div>
        <div>
          <span style={{ fontFamily: "KyoboHandwriting" }}>배민한나</span>
          {linkComponent("https://www.kyobobook.co.kr/handwriting/font")}
        </div>
      </section>
    </article>
  );
};

const SourceInfoPageButton: React.FC<SourceInfoPageProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Modal.ModalButton
      {...rest}
      modalProps={{ type: "page", title: "출처 정보" }}
      modalChildren={<Page />}
    >
      {children}
    </Modal.ModalButton>
  );
};

SourceInfoPageButton.displayName = "SourceInfoPageButton";

export default SourceInfoPageButton;
