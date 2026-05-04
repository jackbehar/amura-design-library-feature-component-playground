import type { ChipProps } from '@mui/material';

type MUITokenPropsBase = Pick<
  ChipProps,
  | 'label'
  | 'avatar'
  | 'icon'
  | 'onDelete'
  | 'onClick'
  | 'clickable'
  | 'disabled'
  | 'id'
  | 'tabIndex'
  | 'className'
  | 'sx'
>;

export interface IProps extends MUITokenPropsBase {
  minWidth?: string;
  maxWidth?: string;
  /**
   * @uxpinbind onActiveChange 0
   */
  active?: boolean;
  onActiveChange?: (value: boolean) => void;
}
