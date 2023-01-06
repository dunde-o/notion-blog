import React, { MouseEventHandler, ReactNode } from "react";
import { ModalProps } from "./Modal.type";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { DivideLine } from "@components/atoms";
import Image from "next/image";
import { IMG_PROPS, IMG_SIZES } from "@common/constants/image";
import ModalButton from "./shared/ModalButton";

const Modal: React.FC<ModalProps> = (props) => {
  const { type, options, title, onClose, children } = props;

  const createHandleEvent =
    (event?: MouseEventHandler) => (e: React.MouseEvent) => {
      event?.(e);
      onClose?.(e);
    };

  const handleModalClose = createHandleEvent();

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
        <button onClick={createHandleEvent(props.onCheckClick)}>확인</button>
      </div>
    );

    return wrapComponent(foot);
  }

  if (type === "check") {
    const foot = (
      <div className={styles.foot}>
        <button onClick={createHandleEvent(props.onYesClick)}>예</button>
        <button onClick={createHandleEvent(props.onNoClick)}>아니오</button>
      </div>
    );
    return wrapComponent(foot);
  }

  return wrapComponent();
};

Modal.displayName = "Modal";

export default Object.assign(Modal, { ModalButton });
