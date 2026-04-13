import type { TooltipProps } from '@mui/material';

/** Props surfaced in UXPin Merge (narrowed from full MUI `TooltipProps`). */
export type MUITooltipProps = Pick<
  TooltipProps,
  | 'title'
  | 'children'
  | 'placement'
  | 'arrow'
  | 'open'
  | 'disableHoverListener'
  | 'disableFocusListener'
  | 'disableTouchListener'
  | 'enterDelay'
  | 'leaveDelay'
  | 'followCursor'
  | 'className'
  | 'sx'
  | 'describeChild'
>;
