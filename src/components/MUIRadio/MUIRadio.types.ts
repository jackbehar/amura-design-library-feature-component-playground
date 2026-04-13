import type { RadioProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `RadioProps`). */
export type MUIRadioProps = Pick<
  RadioProps,
  | 'checked'
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
