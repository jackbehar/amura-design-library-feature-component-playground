import type { MUISwitchProps } from './MUISwitch.types';

import { SwitchStyled } from './MUISwitch.styles';

export default function MUISwitch({ isGrayWhenDisabled = false, ...props }: MUISwitchProps) {
  return (
    <SwitchStyled
      {...props}
      className={`${props.className || ''} ${isGrayWhenDisabled && props.disabled ? 'gray-disabled' : ''}`}
    />
  );
}
