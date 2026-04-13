import type { SwitchProps } from '@mui/material';

import { SwitchStyled } from './MUISwitch.styles';
import type { MUISwitchProps } from './MUISwitch.types';

export default function MUISwitch({ isGrayWhenDisabled = false, ...props }: MUISwitchProps) {
  return (
    <SwitchStyled
      {...(props as SwitchProps)}
      className={`${props.className || ''} ${isGrayWhenDisabled && props.disabled ? 'gray-disabled' : ''}`}
    />
  );
}
