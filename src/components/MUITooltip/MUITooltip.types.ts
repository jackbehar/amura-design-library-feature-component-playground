import type { ReactNode } from 'react';
import type { TooltipProps } from '@mui/material';

type MUITooltipMuiProps = Pick<
  TooltipProps,
  | 'title'
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

/**
 * Props surfaced in UXPin Merge (narrowed from full MUI `TooltipProps`).
 * `children` is `ReactNode` (not MUI’s `ReactElement`) so Merge serializes it as `node`
 * and allows dragging components into the trigger slot; MUITooltip still normalizes
 * primitives to a single element for the underlying Tooltip.
 */
export type MUITooltipProps = MUITooltipMuiProps & {
  children?: ReactNode;
};
