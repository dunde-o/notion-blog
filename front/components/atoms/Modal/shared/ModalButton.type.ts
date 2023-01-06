import React from "react";
import { ModalProps } from "../Modal.type";

export interface ModalButtonProps
  extends Omit<ModalProps, "isOpen" | "children"> {
  children: React.ReactNode;
  initOpenState?: boolean;
  modalProps: ModalProps;
}
