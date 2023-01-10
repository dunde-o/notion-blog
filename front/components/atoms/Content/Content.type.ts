import { ReactNode } from "react";
import { Direction } from "@common/types/direction";
import { BlockSize } from "@common/types/size";
import { ReactHTMLAttribute } from "@common/types/type";

export interface ContentProps extends ReactHTMLAttribute<HTMLElement> {
  direction?: Direction;
  size?: BlockSize;
  children?: ReactNode;
}
