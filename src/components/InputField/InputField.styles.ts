import { makeStyles } from "tss-react/mui";

import { IProps } from "./InputField.types";

export const useStyles = makeStyles<IProps>()((theme, props) => ({
  inputWrapper: {
    width: "100%",
  },
  gray400: {
    color: theme.palette.colors.gray[400],
  },
  errorText: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    margin: "3px 0px 0px",
  },
  count: {
    color: theme.palette.colors.gray[500],
  },
  errorHighlight: {
    color: "#DA5552",
  },
  menu: {
    "& .MuiMenu-list": {
      background: `${theme.palette.colors.system.white} !important`,
      color: `${theme.palette.colors.gray[500]} !important`,
    },
    "& .MuiListItem-button": {
      background: `${theme.palette.colors.system.white} !important`,
      "&:hover": {
        background: "rgba(0, 0, 0, 0.08) !important",
      },
    },
  },
  tokenWrap: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    padding: "10px 0",
  },
  inputRootStyle: {
    boxShadow: props.solidVariant ? "2px 2px 54px rgb(0 0 0 / 5%)" : "unset",
    borderRadius: props.solidVariant ? "4px" : "unset",
    background: props.solidVariant
      ? `${theme.palette.colors.system.white} !important`
      : "transparent !important",

    "& *": {
      outline: "none !important",
    },
    "& .MuiInputLabel-formControl": {
      color: `${theme.palette.colors.gray[500]} !important`,
    },
    "& .MuiInput-underline:after": {
      borderBottom: `2px solid #292F3F`,
      transform: props.value ? "scaleX(1) !important" : undefined,
    },
    "& .MuiInputBase-root": {
      background: "transparent !important",
      padding: props.InputProps?.startAdornment ? "6px 0" : "",
      color:
        props.errorText || props.helperText
          ? "#DA5552 !important"
          : theme.palette.colors.gray[900],
      pointerEvents: props.isReadOnly ? "none" : "initial",
      opacity: props.isReadOnly ? "0.5" : "1",
      alignItems: props.InputProps?.startAdornment
        ? "center"
        : props.solidVariant
          ? "center"
          : "baseline",
      ...(props.compactMultiline && {
        marginTop: "8px !important",
      }),
    },
    "& .Mui-error": {
      "&:before": { borderBottomColor: "#d32f2f!important" },
      "&:after": { borderBottomColor: "#d32f2f!important" },
    },
    "& .MuiInputBase-input": {
      background: "transparent !important",
      maxHeight: "auto",
      ...(props.multiline
        ? {
            overflow: "auto !important",
            padding: "4px 0",
          }
        : {
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: props.renderValueAsToken ? "auto" : "28px",
            padding: props.solidVariant
              ? "8px 12px !important"
              : "0px 6px 6px 0px !important",
            whiteSpace: "nowrap",
          }),
    },
    "& label.MuiInputLabel-shrink": {
      color: `${theme.palette.colors.gray[400]} !important`,
    },
    "& .MuiSelect-icon": {
      color: props.renderValueAsToken
        ? "transparent !important"
        : `${theme.palette.colors.gray[500]} !important`,
    },
  },
}));
