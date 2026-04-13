import type { CheckboxProps } from '@mui/material';

import { CheckboxStyled } from './MUICheckbox.styles';
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from './MUICheckbox.svg';
import type { MUICheckboxProps } from './MUICheckbox.types';

const MUICheckbox = (props: MUICheckboxProps) => {
  const full = props as CheckboxProps;
  return (
    <CheckboxStyled
      {...full}
      icon={full.icon ?? <CheckboxUncheckedIcon />}
      checkedIcon={full.checkedIcon ?? <CheckboxCheckedIcon />}
    />
  );
};

export default MUICheckbox;
