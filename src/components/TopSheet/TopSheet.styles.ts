import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  tab: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    opacity: "0.75",
    zIndex: 1000,
  },
  profile: {
    height: "24px",
    width: "24px",
    color: theme.palette.colors.system.white,
  },
  tabContent: {
    opacity: "1",
    position: "absolute",
    borderRadius: "10px",
    width: "calc(100%)",
    top: "0",
    boxShadow: `0px -2px 4px ${theme.palette.colors.gray[200]}, 0px 4px 10px ${theme.palette.colors.gray[200]}`,
    padding: "16px",
    zIndex: 1000,
  },
  tabContentBottom: {
    opacity: "1",
    position: "absolute",
    borderRadius: "10px",
    width: "calc(100%)",
    bottom: "0",
    boxShadow: `0px -2px 4px ${theme.palette.colors.gray[200]}, 0px 4px 10px ${theme.palette.colors.gray[200]}`,
    zIndex: 1000,
  },
  dropdownWrap: {
    width: "100%",
    backgroundColor: theme.palette.colors.system.white,
    "&.active": {
      height: "fit-content",
      visibility: "visible",
    },
  },
}));
