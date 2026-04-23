import type { MUISwitchProps } from './MUISwitch.types';

import { SwitchStyled } from './MUISwitch.styles';

/**
 * @uxpindocurl https://mui.com/material-ui/react-switch/
 * @uxpindescription Placeholder: The Switch toggles a single setting between on and off states.
 */
export default function MUISwitch({ isGrayWhenDisabled = false, ...props }: MUISwitchProps) {
  return (
    <SwitchStyled
      {...props}
      className={`${props.className || ''} ${isGrayWhenDisabled && props.disabled ? 'gray-disabled' : ''}`}
    />
  );
}
