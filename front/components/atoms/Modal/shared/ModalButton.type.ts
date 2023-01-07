import React from "react";
import { ModalProps } from "../Modal.type";
import { ReactHTMLAttribute } from "@common/types/type";

export interface ModalButtonProps
  extends ReactHTMLAttribute<HTMLButtonElement> {
  children: React.ReactNode;
  initOpenState?: boolean;
  modalProps: ModalProps;
  modalChildren: React.ReactNode;
}
