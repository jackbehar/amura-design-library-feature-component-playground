import { SwitchProps } from '@mui/material';

import { SwitchStyled } from './MUISwitch.styles';

interface MUISwitchProps extends SwitchProps {
  isGrayWhenDisabled?: boolean;
}

export default function MUISwitch({ isGrayWhenDisabled = false, ...props }: MUISwitchProps) {
  return (
    <SwitchStyled
      {...props}
      className={`${props.className || ''} ${isGrayWhenDisabled && props.disabled ? 'gray-disabled' : ''}`}
    />
  );
}
