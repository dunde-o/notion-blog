import React from "react";
import { ModalProps } from "../Modal.type";

export interface ModalButtonProps {
  children: React.ReactNode;
  initOpenState?: boolean;
  modalProps: ModalProps;
  modalChildren: React.ReactNode;
}
