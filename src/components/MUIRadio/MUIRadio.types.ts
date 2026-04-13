import type { RadioProps } from '@mui/material';

type MUIRadioPropsBase = Pick<
  RadioProps,
  | 'defaultChecked'
  | 'disabled'
  | 'name'
  | 'value'
  | 'onChange'
  | 'required'
  | 'color'
  | 'size'
  | 'className'
  | 'sx'
  | 'id'
  | 'tabIndex'
>;

/** Props surfaced in UXPin Merge (narrowed from full MUI `RadioProps`). */
export type MUIRadioProps = MUIRadioPropsBase & {
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked?: boolean;
};
