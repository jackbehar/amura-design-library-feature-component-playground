import { makeStyles } from "tss-react/mui";

import { IProps } from "./SearchField.types";

export const useStyles = makeStyles<IProps>()((theme, props) => ({
  inputWrap: {
    background: `${theme.palette.colors.gray[25]}`,
    borderRadius: "6px",
    "& *": {
      outline: "none !important",
      border: "none !important",
    },
    "& .MuiInputBase-input": {
      background: "transparent !important",
      color: `${theme.palette.colors.theme.primary} !important`,
    },
    "& .MuiInputBase-root": {
      background: "transparent !important",
      padding: "0px 16px !important",
      height: "44px !important",
    },
    "& .MuiInputAdornment-root": {
      marginRight: "12px !important",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-adornedStart": {
      backgroundColor: `${theme.palette.colors.gray[25]} !important`,
      height: props.maxHeight || "54px",
    },
    "& .MuiOutlinedInput-adornedEnd": {
      backgroundColor: `${theme.palette.colors.gray[25]} !important`,
      height: props.maxHeight || "54px",
      borderRadius: "6px",
    },
  },
  clearIcon: {
    cursor: "pointer",
    visibility: "hidden",
    "&.visible": { visibility: "visible" },
  },
}));
