import { MouseEventHandler, ReactNode } from "react";

export interface PageModalProps {
  type: "page";
}

export interface AlertModalProps {
  type: "alert";
  onCheckClick: MouseEventHandler;
}

export interface CheckModalProps {
  type: "check";
  onYesClick: MouseEventHandler;
  onNoClick: MouseEventHandler;
}

export type ModalTypeProps = PageModalProps | AlertModalProps | CheckModalProps;

export interface CommonModalProps {
  options?: {
    background?: boolean;
    zIndex?: number;
  };
  title?: string;
  onClose?: MouseEventHandler;
  children?: ReactNode;
}

export type ModalProps = CommonModalProps & ModalTypeProps;
