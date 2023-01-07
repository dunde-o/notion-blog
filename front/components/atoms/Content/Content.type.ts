import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Direction } from "@common/types/direction";
import { BlockSize } from "@common/types/size";

export interface ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  direction?: Direction;
  size?: BlockSize;
  children?: ReactNode;
}
