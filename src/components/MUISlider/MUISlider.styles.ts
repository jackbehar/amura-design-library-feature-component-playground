import { withStyles } from 'tss-react/mui';

import { theme } from '../../theme/constants';
import { Slider } from '@mui/material';

export const SliderStyled = withStyles(Slider, {
  root: {
    color: '#000000',
    height: 6,
    width: 'calc(100% - 16px)',
    transform: 'translateX(8px)',
    border: 'none',
  },
  thumb: {
    width: '25px',
    height: '25px',
    position: 'relative',
    background: theme.colors.system.white,
    border: '5px solid rgba(37, 36, 39, 0.07)',
    boxSizing: 'border-box',
    transform: 'translate(-50%, calc(-50% + 3px))',
    margin: '0 !important',

    '&::before': {
      content: "''",
      top: '50%',
      left: '50%',
      height: '15px',
      zIndex: '10',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      borderLeft: '3px solid #ffffffff',
      borderRight: '3px solid #ffffffff',
      padding: '0 1px',
    },
    '&::after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      height: '26px',
      width: '26px',
      borderRadius: '50%',
      background: '#F0F0F0',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(255, 255, 255, 0.08), 0px 4px 2px rgba(147, 147, 147, 0.21)',
    },
  },
  track: {
    width: 'calc(100% + 16px)',
    transform: 'translateX(-8px)',
    height: '6px',
    background: theme.colors.gray[500],
    borderRadius: '3px',
    border: 'none',
  },
  rail: {
    width: 'calc(100% + 16px)',
    transform: 'translateX(-8px)',
    height: '6px',
    background: theme.colors.gray[50],
    borderRadius: '3px',
    opacity: '1',
  },
  mark: {
    color: theme.colors.gray[400],
    width: '2px',
    height: '5px',
    fontSize: '10px',
    backgroundColor: '#bfbfbf',
    top: '21px',
    opacity: 1,
  },
  markLabel: {
    color: theme.colors.gray[400],
    fontSize: '12px',
    top: '27px',
  },
});
