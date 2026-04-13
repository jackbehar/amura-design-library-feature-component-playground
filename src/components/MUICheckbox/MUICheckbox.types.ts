import type { CheckboxProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `CheckboxProps`). */
export type MUICheckboxProps = Pick<
  CheckboxProps,
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'indeterminate'
  | 'name'
  | 'value'
  | 'onChange'
  | 'required'
  | 'readOnly'
  | 'className'
  | 'sx'
  | 'id'
  | 'tabIndex'
>;
