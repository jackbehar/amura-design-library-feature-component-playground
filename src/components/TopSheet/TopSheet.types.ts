import type { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  isOpen: boolean;
  disableAutoClose?: boolean;
  handleClose?: Function;
  variant?: "top" | "bottom";
  customStyle?: string;
}
