import type { MUICheckboxProps } from './MUICheckbox.types';

import { CheckboxStyled } from './MUICheckbox.styles';
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from './MUICheckbox.svg';

/**
 * @uxpindocurl https://mui.com/material-ui/react-checkbox/
 * @uxpindescription Placeholder: The Checkbox lets users select one or more items from a set of options.
 */
const MUICheckbox = (props: MUICheckboxProps) => (
  <CheckboxStyled
    {...props}
    icon={props?.icon ?? <CheckboxUncheckedIcon />}
    checkedIcon={props?.checkedIcon ?? <CheckboxCheckedIcon />}
  />
);

export default MUICheckbox;
