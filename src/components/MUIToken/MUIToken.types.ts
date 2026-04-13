import type { ChipProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `ChipProps`). */
type MUITokenPublicMuiProps = Pick<
  ChipProps,
  | 'label'
  | 'onDelete'
  | 'disabled'
  | 'deleteIcon'
  | 'clickable'
  | 'className'
  | 'sx'
  | 'variant'
  | 'color'
  | 'tabIndex'
  | 'id'
  | 'avatar'
>;

export type IProps = MUITokenPublicMuiProps & {
  minWidth?: string;
  maxWidth?: string;
  active?: boolean;
};
