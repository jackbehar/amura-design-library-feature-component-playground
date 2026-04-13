import { SkeletonProps } from '@mui/material';

import { StyledSkeleton } from './MUISkeleton.styles';

export default function MUISkeleton(props: SkeletonProps) {
  return <StyledSkeleton {...props} />;
}
