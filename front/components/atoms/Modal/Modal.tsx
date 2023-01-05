import React, { MouseEventHandler, ReactNode, useState } from "react";
import { ModalProps } from "./Modal.type";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { DivideLine } from "@components/atoms";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";

const Modal: React.FC<ModalProps> = (props) => {
  const { type, options, title, onClose, children, buttonChildren } = props;
  const [isOpen, setIsOpen] = useState(false);

  const createHandleClose =
    (event?: MouseEventHandler) => (e: React.MouseEvent) => {
      event?.(e);
      setIsOpen(false);
    };

  const handleModalClose = createHandleClose(onClose);

  const buttonComponent = (modal: ReactNode) => (
    <>
      <button onClick={() => setIsOpen(true)}>{buttonChildren}</button>
      {isOpen ? modal : null}
    </>
  );

  const wrapComponent = (foot?: ReactNode) => (
    <div
      className={classNames(styles.Modal, {
        [styles.isTransparent]: options?.background,
      })}
      onClick={handleModalClose}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <span>{title}</span>
          <button className={styles["close-btn"]} onClick={handleModalClose}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image {...IMG_SIZES.ICON} {...IMG_PROPS.CLOSE_X} />
          </button>
        </div>
        <DivideLine direction="horizontal" margin={10} />
        <div className={styles.description}>
          {typeof children === "string" ? <pre>{children}</pre> : children}
        </div>
        {foot == null ? null : (
          <>
            <DivideLine direction="horizontal" margin={10} />
            {foot}
          </>
        )}
      </div>
    </div>
  );

  if (type === "alert") {
    const foot = (
      <div className={styles.foot}>
        <button onClick={createHandleClose(props.onCheckClick)}>확인</button>
      </div>
    );

    return buttonComponent(wrapComponent(foot));
  }

  if (type === "check") {
    const foot = (
      <div className={styles.foot}>
        <button onClick={createHandleClose(props.onYesClick)}>예</button>
        <button onClick={createHandleClose(props.onNoClick)}>아니오</button>
      </div>
    );
    return buttonComponent(wrapComponent(foot));
  }

  return buttonComponent(wrapComponent());
};

Modal.displayName = "Modal";

export default Modal;
