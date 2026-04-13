import type { SwitchProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `SwitchProps`). */
type MUISwitchPublicMuiProps = Pick<
  SwitchProps,
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'name'
  | 'onChange'
  | 'required'
  | 'size'
  | 'color'
  | 'className'
  | 'sx'
  | 'id'
  | 'tabIndex'
  | 'inputProps'
>;

export type MUISwitchProps = MUISwitchPublicMuiProps & {
  isGrayWhenDisabled?: boolean;
};
