import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  cardWrap: {
    background: theme.palette.colors.gray[50],
    padding: "12px 16px 12px 16px",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    cursor: "pointer",
    height: "92px",
    borderRadius: "8px",
    marginBottom: "10px",
    gap: "16px",
  },
  imgWrap: {
    background: "#626262",
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    position: "relative",
  },
  logoIcon: {
    position: "absolute",
    top: "40px",
    zIndex: 1,
    left: "44px",
  },
  profilePic: {
    borderRadius: "50%",
    height: "60px",
    width: "60px",
    color: theme.palette.colors.system.white,
    position: "relative",
    fontSize: "12px",
    fontFamily: "Graphik",
    fontWeight: 400,
    background: theme.palette.colors.gray[100],
  },
  cardContentWrap: {
    width: "calc(100% - 76px)",
  },
  cardTitle: {
    color: theme.palette.colors.theme.primary,
    display: "block",
    marginBottom: "8px",
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  discription: {
    color: theme.palette.colors.gray[500],
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    wordBreak: "break-word",
  },
  flexWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  heading: {
    color: theme.palette.colors.gray[900],
    marginBottom: "12px",
  },
  description: {
    color: theme.palette.colors.gray[500],
    wordBreak: "break-word",
  },
  disable: {
    pointerEvents: "none",
    cursor: "default",
    "& svg": {
      "& path": {
        fill: theme.palette.colors.gray[400],
      },
    },
  },
}));
