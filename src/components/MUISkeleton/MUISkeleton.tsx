import { SkeletonProps } from '@mui/material';

import { StyledSkeleton } from './MUISkeleton.styles';

/**
 * @uxpindocurl https://mui.com/material-ui/react-skeleton/
 * @uxpindescription Placeholder: The Skeleton displays a loading placeholder preview before content is available.
 */
export default function MUISkeleton(props: SkeletonProps) {
  return <StyledSkeleton {...props} />;
}
