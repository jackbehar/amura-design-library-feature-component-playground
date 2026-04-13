import type { CheckboxProps } from '@mui/material';

type MUICheckboxPropsBase = Pick<
  CheckboxProps,
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
  | 'icon'
  | 'checkedIcon'
>;

/** Props surfaced in UXPin Merge (narrowed from full MUI `CheckboxProps`). */
export type MUICheckboxProps = MUICheckboxPropsBase & {
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked?: boolean;
};
