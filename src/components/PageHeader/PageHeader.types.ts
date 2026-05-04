import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

export interface IProps {
  handleBack?: MouseEventHandler;
  isClearAll?: boolean;
  headerContent: ReactNode;
  subtitle?: string;
  handleClearAll?: MouseEventHandler;
  clearAllText?: ReactNode;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  bottomContainer?: ReactNode;
  customStyle?: string;
  paddingX?: string;
  titleAlignment?: CSSProperties["textAlign"];
  bottomContainerStyle?: string;
  injectComponent?: ReactNode;
  customClassName?: string;
}
