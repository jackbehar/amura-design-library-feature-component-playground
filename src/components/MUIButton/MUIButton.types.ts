import type { ButtonProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `ButtonProps`). */
type MUIButtonPublicMuiProps = Pick<
  ButtonProps,
  | 'children'
  | 'variant'
  | 'size'
  | 'disabled'
  | 'color'
  | 'fullWidth'
  | 'href'
  | 'type'
  | 'startIcon'
  | 'endIcon'
  | 'disableElevation'
  | 'className'
  | 'sx'
  | 'onClick'
>;

export type IProps = MUIButtonPublicMuiProps & {
  fontSize?: string;
  showSingleLine?: boolean;
  background?: string;
  padding?: string;
  clickEffect?: boolean;
};
