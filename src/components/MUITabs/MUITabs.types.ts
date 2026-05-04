import { MouseEventHandler } from "react";

export interface IProps {
  paddingX?: string;
  customStyle?: string;
  tabOptions: Array<string>;
  /**
   * @uxpinbind onTabChange 0
   */
  activeTab: string;
  handleEditTab?: MouseEventHandler;
  onTabChange?: (value: string) => void;
}
