import type { ReactNode } from "react";

export interface IProps {
  open?: boolean;
  anchor: "top" | "bottom";
  headerTitle?: ReactNode;
  handleClose: () => void;
  drawerPadding?: string;
  children: ReactNode;
  disableAutoClose?: boolean;
  handleOpen?: Function;
  noHeader?: boolean;
  disableCross?: boolean;
  changebgColor?: boolean;
  maxHeight?: string;
  minHeight?: string;
  className?: string;
  closeNestedFlyout?: Function;
  customHeader?: ReactNode;
}
