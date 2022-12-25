import { ReactNode } from "react";
import { Direction } from "@common/types/Direction";
import { BlockSize } from "@common/types/Size";

export interface ContentProps {
  direction?: Direction;
  size?: BlockSize;
  children?: ReactNode;
}
