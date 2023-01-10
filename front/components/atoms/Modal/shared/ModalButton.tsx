import React, { useState } from "react";
import { ModalButtonProps } from "./ModalButton.type";
import styles from "./ModalButton.module.scss";
import Modal from "../Modal";
import classNames from "classnames";

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  const {
    children,
    initOpenState,
    modalProps: { onClose, ...modalRest },
    modalChildren,
    className,
    ...buttonRest
  } = props;
  const [isOpen, setIsOpen] = useState(initOpenState ?? false);

  const handleModalClose = (e: React.MouseEvent) => {
    onClose?.(e);
    setIsOpen(false);
  };

  return (
    <>
      <button
        {...buttonRest}
        className={classNames(styles.ModalButton, className)}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
      {isOpen ? (
        <Modal {...modalRest} onClose={handleModalClose}>
          {modalChildren}
        </Modal>
      ) : null}
    </>
  );
};

ModalButton.displayName = "ModalButton";

export default ModalButton;
