import { ReactHTMLAttribute } from "@common/types/type";
import { DefaultSwitchProps } from "./shared/DefaultSwitch.type";

export interface SwitchProps extends ReactHTMLAttribute<HTMLButtonElement> {
  defaultAction?: () => unknown;
  otherAction?: () => unknown;
  commonAction?: () => unknown;
  defaultSwitchProps?: DefaultSwitchProps;
}
