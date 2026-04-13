import { isValidElement } from 'react';

import type { MUITooltipProps } from './MUITooltip.types';

import { TooltipStyled } from './MUITooltip.styles';

/**
 * MUI Tooltip clones `children` and attaches ref + listeners to a DOM node.
 * Plain function components (e.g. MUIButton) do not receive `ref`, which breaks Tooltip.
 * Wrapping React elements in a span matches MUI’s workaround for non–ref-forwarding children.
 */
function tooltipChild(children: MUITooltipProps['children']) {
  if (children == null) {
    return <span />;
  }
  if (typeof children === 'string' || typeof children === 'number') {
    return <span>{children}</span>;
  }
  if (isValidElement(children)) {
    return (
      <span style={{ display: 'inline-block', maxWidth: '100%' }}>
        {children}
      </span>
    );
  }
  return <span>{children}</span>;
}

const MUITooltip = ({ children, ...rest }: MUITooltipProps) => (
  <TooltipStyled {...rest}>{tooltipChild(children)}</TooltipStyled>
);

export default MUITooltip;
