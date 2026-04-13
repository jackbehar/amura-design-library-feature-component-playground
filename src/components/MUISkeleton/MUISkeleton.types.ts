import type { SkeletonProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `SkeletonProps`). */
export type MUISkeletonProps = Pick<
  SkeletonProps,
  'variant' | 'width' | 'height' | 'animation' | 'className' | 'sx'
>;
