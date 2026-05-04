import { StyledSkeleton } from './MUISkeleton.styles';
import { MUISkeletonProps } from './MUISkeleton.types';

/**
 * @uxpindocurl https://mui.com/material-ui/react-skeleton/
 * @uxpindescription Placeholder: The Skeleton displays a loading placeholder preview before content is available.
 */
export default function MUISkeleton(props: MUISkeletonProps) {
  return <div><StyledSkeleton {...props} /></div>;
}
