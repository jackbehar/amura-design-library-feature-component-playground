import type { MUICheckboxProps } from './MUICheckbox.types';

import { CheckboxStyled } from './MUICheckbox.styles';
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from './MUICheckbox.svg';

const MUICheckbox = (props: MUICheckboxProps) => (
  <CheckboxStyled
    {...props}
    icon={props?.icon ?? <CheckboxUncheckedIcon />}
    checkedIcon={props?.checkedIcon ?? <CheckboxCheckedIcon />}
  />
);

export default MUICheckbox;
