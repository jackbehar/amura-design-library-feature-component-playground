import { MouseEventHandler } from "react";

export interface IProps {
  /**
   * Color of the dot
   * @uxpincontroltype color
   */
  color?: string;
  /**
   * @uxpinbind onSelectedChange 0
   */
  isSelected?: boolean;
  onClick?: MouseEventHandler;
  onSelectedChange?: (value: boolean) => void;
  count?: number;
  opacityControl?: boolean;
  clickable?: boolean;
  dotType?: "REDDOT" | "GREENDOT";
  markAsUnread?: boolean;
}
