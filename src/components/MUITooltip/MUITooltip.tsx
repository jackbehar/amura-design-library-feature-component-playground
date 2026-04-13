import type { TooltipProps } from '@mui/material';

import { TooltipStyled } from './MUITooltip.styles';
import type { MUITooltipProps } from './MUITooltip.types';

const MUITooltip = (props: MUITooltipProps) => <TooltipStyled {...(props as TooltipProps)} />;

export default MUITooltip;
