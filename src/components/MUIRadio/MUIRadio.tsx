import type { RadioProps } from '@mui/material';

import { RadioStyled } from './MUIRadio.styles';
import type { MUIRadioProps } from './MUIRadio.types';

const MUIRadio = (props: MUIRadioProps) => <RadioStyled {...(props as RadioProps)} />;

export default MUIRadio;
