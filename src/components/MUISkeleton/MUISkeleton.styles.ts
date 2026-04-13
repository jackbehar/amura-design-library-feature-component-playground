import { withStyles } from 'tss-react/mui';

import { Skeleton } from '@mui/material';

export const StyledSkeleton = withStyles(Skeleton, () => ({
  root: {
    background: 'linear-gradient(90deg, #E1E1E1 -0.64%, rgba(241, 241, 241, 0) 99.74%)',
    borderRadius: '4px',
    '&::after': {
      background: 'linear-gradient(90deg, transparent, rgb(255 255 255 / 60%), transparent)',
    },
  },
}));
