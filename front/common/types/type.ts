import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ReactHTMLAttribute<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;
