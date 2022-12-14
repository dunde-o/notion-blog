import { UrlObject } from "url";
import { Mode } from "@common/types/Mode";
import { Width } from "@common/types/Size";

export interface TextLinkProps {
  mode?: Mode;
  href: string | UrlObject;
  width?: Width;
  text?: string;
  children?: string;
}
