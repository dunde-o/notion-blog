import React, { useState } from "react";
import { ModalButtonProps } from "./ModalButton.type";
import Modal from "../Modal";

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  const {
    children,
    initOpenState,
    modalProps: { onClose, ...rest },
  } = props;
  const [isOpen, setIsOpen] = useState(initOpenState ?? false);

  const handleModalClose = (e: React.MouseEvent) => {
    onClose?.(e);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{children}</button>
      {isOpen ? <Modal {...rest} onClose={handleModalClose} /> : null}
    </>
  );
};

ModalButton.displayName = "ModalButton";

export default ModalButton;
