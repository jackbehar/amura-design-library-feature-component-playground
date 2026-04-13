import type { SkeletonProps } from '@mui/material';

import { StyledSkeleton } from './MUISkeleton.styles';
import type { MUISkeletonProps } from './MUISkeleton.types';

export default function MUISkeleton(props: MUISkeletonProps) {
  return <StyledSkeleton {...(props as SkeletonProps)} />;
}
