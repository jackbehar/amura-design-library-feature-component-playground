import type { ReactNode } from "react";
import { AccordionProps } from "@mui/material";

export interface IProps extends AccordionProps {
  accordianTitle: ReactNode;
  customStyle?: string;
  accodianContent?: ReactNode;
  children: ReactNode;
  noContent?: ReactNode;
  subTitle?: ReactNode;
  disabled?: boolean;
  iconColor?: string;
  removeShadow?: boolean;
}
