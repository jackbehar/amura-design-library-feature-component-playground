import { ChipProps } from '@mui/material';

export interface IProps extends ChipProps {
  minWidth?: string;
  maxWidth?: string;
  active?: boolean;
}
