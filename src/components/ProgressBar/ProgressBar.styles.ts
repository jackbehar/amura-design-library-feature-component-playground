import { makeStyles } from "tss-react/mui";

import { ProgressProps } from "./ProgressBar.types";

export const useStyles = makeStyles<ProgressProps>()((theme, props) => ({
  progressWrap: {
    height: "6px",
    width: "100%",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    background: "#F1F1F1",
    marginBottom: "5px",
  },
  progressField: {
    display: "inline-block",
    width: `${props.progressValue}%`,
    background: `${props.progreesColor}`,
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
    borderRadius: "inherit",
  },
}));
