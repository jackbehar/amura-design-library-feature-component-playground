import { MouseEventHandler, ReactElement, ReactNode } from "react";

export interface IModalBoxProps {
  /**
   * @uxpinbind onOpenChange 0
   */
  open: boolean;
  onOpenChange?: (value: boolean) => void;
  modalTitle?: string;
  children: ReactNode;
  handleClose: MouseEventHandler;
  buttonPlacement?: "flex-start" | "center" | "flex-end" | "space-between";
  titleAlignment?: "left" | "center" | "right";
  customStyle?: string;
  panelWidth?: string;
  hideCloseIcon?: boolean;
  buttonConfig: Array<{
    text: string | ReactElement;
    variant: "contained" | "text";
    onClick: (e: React.MouseEvent) => void;
    fullWidth?: boolean;
    disabled?: boolean;
  }>;
  showOnlyChildern?: boolean;
  hideBackdrop?: boolean;
}
