import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Direction } from "@common/types/Direction";
import { BlockSize } from "@common/types/Size";

export interface ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  direction?: Direction;
  size?: BlockSize;
  children?: ReactNode;
}
