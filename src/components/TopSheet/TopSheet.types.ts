import type { ReactNode, Ref } from "react";

export interface IProps {
  children: ReactNode;
  isOpen: boolean;
  disableAutoClose?: boolean;
  handleClose?: Function;
  variant?: "top" | "bottom";
  customStyle?: string;
  /** @uxpinignoreprop */
  uxpinRef?: Ref<HTMLDivElement>;
}
