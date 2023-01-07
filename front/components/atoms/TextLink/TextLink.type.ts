import { UrlObject } from "url";
import { Mode } from "@common/types/mode";
import { Width } from "@common/types/size";

export interface TextLinkProps {
  mode?: Mode;
  href: string | UrlObject;
  width?: Width;
  text?: string;
  children?: string;
}
