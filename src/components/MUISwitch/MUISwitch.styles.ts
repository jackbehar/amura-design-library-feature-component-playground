import { withStyles } from 'tss-react/mui';

import { Switch } from '@mui/material';

export const SwitchStyled = withStyles(Switch, (theme) => ({
  root: {
    height: '32px',
    boxSizing: 'border-box',
    width: '52px',
    padding: '0',
    borderRadius: '16px',
    border: `2px solid ${theme.palette.colors.gray[100]}`,
    '&.gray-disabled': {
      border: `2px solid ${theme.palette.colors.gray[200]}`,
      '& .MuiSwitch-track': {
        backgroundColor: `${theme.palette.colors.gray[200]} !important`,
      },
      '& .MuiSwitch-switchBase': {
        color: `${theme.palette.colors.gray[300]} !important`,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: `${theme.palette.colors.gray[400]} !important`,
      },
    },
  },
  switchBase: {
    width: '28px',
    height: '28px',
    padding: '0',
    color: `${theme.palette.colors.gray[400]} !important`,
  },
  thumb: {
    width: '28px',
    height: '28px',
  },
  track: {
    borderRadius: 'inherit',
    backgroundColor: `${theme.palette.colors.gray[25]} !important`,
    opacity: 1,
  },
  checked: {
    color: `${theme.palette.colors.theme.primary} !important`,
    '&:hover': {
      backgroundColor: 'rgb(37 36 39 / 10%) !important',
    },
  },
}));
