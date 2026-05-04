import { ButtonProps } from '@mui/material';

type MUIButtonPropsBase = Pick<
  ButtonProps,
  | 'children'
  | 'variant'
  | 'size'
  | 'disabled'
  | 'fullWidth'
  | 'onClick'
  | 'type'
  | 'disableRipple'
  | 'id'
  | 'tabIndex'
  | 'className'
  | 'sx'
>;

export interface IProps extends MUIButtonPropsBase {
  fontSize?: string;
  showSingleLine?: boolean;
  background?: string;
  padding?: string;
  clickEffect?: boolean;
}
