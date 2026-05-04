import { SM320 } from "../../theme/constants";
import { styled } from "@mui/material";

export const DrawerStyled = styled("div")(
  ({ theme, anchor, maxHeight, minHeight, changebgColor }: any) => ({
    overflowY: "auto",
    boxSizing: "border-box",
    background: `${changebgColor ? theme.palette.colors.gray[25] : theme.palette.colors.system.white} !important`,
    boxShadow: "0px 14px 74px rgba(0, 0, 0, 0.15)",
    borderRadius: anchor === "top" ? "0px 0px 16px 16px " : "16px 16px 0px 0px",
    width: "100%",
    overflow: "hidden",
    maxHeight: maxHeight || "90%",
    minHeight: minHeight || "auto",
    position: "absolute",
    left: 0,
    right: 0,
    top: anchor === "top" ? 0 : "initial",
    bottom: anchor === "top" ? "initial" : 0,
    animation: "fadeInBottom .3s ease",
    zIndex: "inherit",
    display: "flex",
    flexDirection: "column",
    [SM320]: {
      maxHeight: "calc(100vh - 8px) !important",
    },
  }),
);

export const DrawerBGStyled = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgb(0 0 0 / 18%)",
  zIndex: 1050,
  animation: "fadeIn .3s ease",
});

export const ContainerStyled = styled("div")<any>(({ drawerPadding }: any) => ({
  padding: drawerPadding || "20px",
  height: "inherit",
  overflowY: "auto",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  [SM320]: {
    padding: drawerPadding || "12px",
  },
}));

export const ContainerHeaderStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
  boxSizing: "border-box",
  "& .contentStyle": {
    color: theme.palette.colors.gray[900],
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    wordBreak: "break-all",
  },
  "& .iconStyle": {
    cursor: "pointer",
    [SM320]: {
      "& svg": {
        width: "18px",
        height: "18px",
      },
    },
  },
  [SM320]: {
    marginBottom: "12px",
  },
}));
