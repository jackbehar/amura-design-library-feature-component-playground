import type { SwitchProps } from '@mui/material';

type MUISwitchPublicMuiProps = Pick<
  SwitchProps,
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

/** Props surfaced in UXPin Merge (narrowed from full MUI `SwitchProps`). */
export type MUISwitchProps = MUISwitchPublicMuiProps & {
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked?: boolean;
  isGrayWhenDisabled?: boolean;
};
