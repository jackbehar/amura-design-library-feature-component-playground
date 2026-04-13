import { CheckboxProps } from '@mui/material';

import { CheckboxStyled } from './MUICheckbox.styles';
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from './MUICheckbox.svg';

const MUICheckbox = (props: CheckboxProps) => (
  <CheckboxStyled
    {...props}
    icon={props?.icon ?? <CheckboxUncheckedIcon />}
    checkedIcon={props?.checkedIcon ?? <CheckboxCheckedIcon />}
  />
);

export default MUICheckbox;
