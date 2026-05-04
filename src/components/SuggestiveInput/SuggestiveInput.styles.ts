import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  container: {
    padding: "16px 0",
    background: theme.palette.colors.system.white,
    maxHeight: "285px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  span: {
    padding: "10px",
    display: "inline-block",
  },
  popup: {
    position: "absolute",
    zIndex: 99999,
    width: "100%",
    top: "50px",
    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.25)",
    background: theme.palette.colors.system.white,
  },
  rootRelativeContainer: {
    backgroundColor: theme.palette.colors.system.white,
    height: "100%",
    position: "relative",
  },
  searchbox: {
    height: "40px !important",
    background: theme.palette.colors.gray[25],
    borderRadius: "6px",
  },
  dflex: {
    "& .MuiButtonBase-root": {
      height: "24px",
      padding: "0px !important",
    },
  },
  spaceBetween: {
    padding: "16px",
    borderBottom: "0.5px solid #E1E1E1",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.colors.gray[50],
    },
  },
  highlightOption: {
    background: theme.palette.colors.gray[100],
  },
  name: {
    display: "block",
    color: theme.palette.colors.gray[500],
    maxWidth: "280px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  text: {
    display: "block",
    color: theme.palette.colors.gray[500],
  },
  date: {
    color: theme.palette.colors.gray[500],
    display: "block",
    textAlign: "end",
  },
  dot: {
    background: "#d8f3dc",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },
}));
