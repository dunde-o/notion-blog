import React, { useState } from "react";
import { ModalButtonProps } from "./ModalButton.type";
import styles from "./ModalButton.module.scss";
import Modal from "../Modal";

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  const {
    children,
    initOpenState,
    modalProps: { onClose, ...rest },
    modalChildren,
  } = props;
  const [isOpen, setIsOpen] = useState(initOpenState ?? false);

  const handleModalClose = (e: React.MouseEvent) => {
    onClose?.(e);
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.ModalButton} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      {isOpen ? (
        <Modal {...rest} onClose={handleModalClose}>
          {modalChildren}
        </Modal>
      ) : null}
    </>
  );
};

ModalButton.displayName = "ModalButton";

export default ModalButton;
