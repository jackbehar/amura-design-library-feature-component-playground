import { withStyles } from 'tss-react/mui';

import { theme } from '../../theme/constants';
import { Tooltip } from '@mui/material';

export const TooltipStyled = withStyles(Tooltip, {
  tooltip: {
    backgroundColor: '#F0F0F0',
    borderRadius: '4px',
    fontSize: '12px',
    color: theme.colors.gray[500],
    padding: '8px',
    margin: '15px 0',
    wordBreak: 'break-all',
  },
  arrow: { color: '#F0F0F0' },
});
