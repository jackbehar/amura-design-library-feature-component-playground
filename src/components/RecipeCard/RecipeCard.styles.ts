import { makeStyles } from "tss-react/mui";

const SM320 = "@media (max-width: 320px)";

export const useStyles = makeStyles()((theme) => ({
  recipe: {
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.2s ease-in-out",
    "&:active": {
      transform: "scale(0.95)",
    },
  },
  recipeImg: {
    width: "135px",
    height: "125px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  displayLine: {
    display: "flex",
    width: "100%",
    "& .contentDiv": {
      marginTop: "5px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
      marginLeft: "10px",
    },
    "& .figureTagsWrap": {
      display: "none !important",
    },
    "& .figureWrapper": {
      width: "135px !important",
      height: "135px !important",
      flexShrink: 0,
      overflow: "hidden",
      borderRadius: "8px",
    },
    "& > img": {
      width: "135px",
      height: "135px",
      aspectRatio: 1,
    },
    [SM320]: {
      "& .figureWrapper": {
        width: "100px !important",
        height: "100px !important",
      },
      "& .figureWrapper img": {
        width: "100% !important",
        height: "100% !important",
      },
      "& > img": {
        width: "100px",
        height: "100px",
      },
    },
  },
  recipeNameDiv: {
    display: "flex",
  },
  recipeName: {
    color: theme.palette.colors.gray[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "8px",
    lineHeight: "22px",
    fontWeight: 500,
    fontSize: "15px",
    [SM320]: {
      lineHeight: "18px",
    },
  },
  calories: {
    margin: "0px 10px 10px 0px",
    border: `1px solid ${theme.palette.colors.gray[400]} !important`,
    color: theme.palette.colors.gray[500],
    fontSize: "12px",
    padding: "2px 8px 2px 8px",
    display: "flex",
    alignItems: "center",
    borderRadius: "16px",
    lineHeight: "0",
    [SM320]: {
      margin: "0px 6px 6px 0px",
      padding: "2px 6px",
    },
  },
  flex: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  calorieIcon: {
    display: "inherit",
    height: "20px",
    width: "20px",
    "& svg": {
      width: "20px !important",
      height: "20px !important",
      marginRight: "6px",
      "& path": {
        fill: `${theme.palette.colors.gray[500]} !important`,
      },
    },
    "& path": {
      fill: `${theme.palette.colors.gray[500]} !important`,
    },
  },
  button: {
    color: theme.palette.colors.theme.primary,
    cursor: "pointer",
    fontSize: "14px",
    whiteSpace: "nowrap",
    marginTop: "8px",
    alignSelf: "end",
  },
  figureWrapper: {
    margin: "0px",
    padding: "0px",
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    marginBottom: "16px",
    objectFit: "cover",
    "& img": {
      display: "block",
      maxWidth: "100%",
      width: "100%",
      height: "197px",
      borderRadius: "8px",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: 1,
      left: "0px",
      top: "0px",
    },
  },
  hasImage: {
    "&:after": {
      background: "rgba(0,0,0,0.5)",
    },
  },
  figureTagsWrap: {
    position: "absolute",
    bottom: "8px",
    left: "0px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
    boxSizing: "border-box",
    padding: "0 8px",
  },
  foodProperties: {
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px 8px",
    background: "rgba(37, 36, 39, 0.5)",
    color: theme.palette.colors.system.white,
    borderRadius: "12px",
    height: "24px",
    lineHeight: 0,
    "& svg": {
      width: "16px",
      height: "16px",
    },
  },
  iconWrap: {
    display: "inline-block",
    marginRight: "5px",
    position: "relative",
  },
  fillIconColor: {
    "& svg path": {
      fill: `${theme.palette.colors.system.white} !important`,
    },
  },
}));
