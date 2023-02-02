import { ImageProps } from "next/image";

export interface DefaultSwitchProps {
  state?: boolean;
  icon?: { default?: ImageProps | string; other?: ImageProps | string };
}
