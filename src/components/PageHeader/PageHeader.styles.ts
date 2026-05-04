import { makeStyles } from "tss-react/mui";

import { IProps } from "./PageHeader.types";

export const useStyles = makeStyles<IProps>()((theme, props) => ({
  "& *": {
    boxSizing: "border-box",
  },
  headerContainer: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "auto auto",
    alignItems: "center",
    padding: `0 ${props.paddingX || "0"} `,
  },
  firstContainer: {
    "& .backArrow": {
      cursor: "pointer",
      display: "flex",
      alignItems: "inherit",
      marginRight: "15px",
    },
  },
  middleContainer: {
    textAlign: props?.titleAlignment || "left",
    margin: "auto 0px",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  headerText: {
    color: theme.palette.colors.gray[900],
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  subtitleContainer: {
    gridColumn: "2",
    gridRow: "2",
    textAlign: props?.titleAlignment || "left",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginRight: 20,
  },
  lastContainer: { cursor: "pointer" },
  bottomContainer: {
    gridColumn: "1 / 4",
    gridRow: props.subtitle ? "3" : "2",
  },
  truncateText: {
    whiteSpace: "nowrap",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    display: "inline-block",
    overflow: "hidden",
    cursor: "pointer",
    width: "100%",
  },
}));
