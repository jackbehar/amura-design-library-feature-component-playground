import type { SliderProps } from '@mui/material';

type MUISliderPropsBase = Pick<
  SliderProps,
  | 'defaultValue'
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

/** Props surfaced in UXPin Merge (narrowed from full MUI `SliderProps`). */
export type MUISliderProps = MUISliderPropsBase & {
  /**
   * @uxpinbind onChange 1
   */
  value?: number | number[];
};
