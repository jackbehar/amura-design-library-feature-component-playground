import type { SliderProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `SliderProps`). */
export type MUISliderProps = Pick<
  SliderProps,
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'min'
  | 'max'
  | 'step'
  | 'marks'
  | 'disabled'
  | 'size'
  | 'color'
  | 'name'
  | 'className'
  | 'sx'
  | 'valueLabelDisplay'
  | 'track'
  | 'orientation'
  | 'tabIndex'
  | 'id'
>;
