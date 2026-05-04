import { makeStyles } from "tss-react/mui";

import { IProps } from "./DotStatus.types";

export const useStyles = makeStyles<IProps>()(
  (theme, { color, isSelected, opacityControl, dotType }) => ({
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "13px",
      position: "relative",
      height: dotType !== "REDDOT" ? "24px" : "20px",
      width: dotType !== "REDDOT" ? "24px" : "20px",
    },
    numStyleText: {
      color: theme.palette.colors.system.white,
      borderRadius: "100%",
      backgroundColor: `${color && !opacityControl ? color : theme.palette.colors.gray[100]}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    svgStyle: {
      cursor: "pointer",
      boxShadow: "rgb(0 0 0 / 4%) 0px 4px 4px",
      boxSizing: "border-box",
      border: `4px solid ${
        opacityControl
          ? theme.palette.colors.system.white
          : isSelected
            ? theme.palette.colors.gray[50]
            : theme.palette.colors.system.white
      }`,
      borderRadius: "50%",
      height: "24px",
      width: "24px",
      "& > rect": { fill: color || "#E1E1E1" },
    },
    wrapper: {
      height: dotType !== "REDDOT" ? "24px" : "20px",
      width: dotType !== "REDDOT" ? "24px" : "20px",
      borderRadius: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
);
