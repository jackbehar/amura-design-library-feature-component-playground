import React, { useEffect } from "react";

import { TextField } from "@mui/material";

import MUIToken from "../MUIToken/MUIToken";
import { useStyles } from "./InputField.styles";
import { IProps } from "./InputField.types";

/**
 * @uxpindocurl https://mui.com/material-ui/react-text-field/
 * @uxpindescription Text field with Amura styling, optional token display, and character limit support.
 */
export default function InputField(props: IProps) {
  const {
    renderValueAsToken,
    renderValueAsTokenDeletable,
    handleDeleteToken,
    solidVariant,
    placeholder,
    className,
    isSearchInput,
    onFocus,
    onBlur,
    name,
    value,
    characterLimit,
    multiline,
    maxRows,
    autoFocus,
    inputTextRef,
    ...rest
  } = props;

  const inputRef = inputTextRef ?? React.useRef<HTMLInputElement | null>(null);
  const hasAutoFocused = React.useRef(false);

  useEffect(() => {
    if (autoFocus && inputRef.current && !hasAutoFocused.current) {
      hasAutoFocused.current = true;
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [autoFocus]);

  const errorText = React.useMemo(() => {
    if (characterLimit > 0 && typeof value === "string") {
      if (value.length > characterLimit) {
        return `${value.length - characterLimit} characters over the limit`;
      } else {
        return "";
      }
    }
  }, [value, characterLimit]);

  const { classes } = useStyles({ ...props, errorText });

  return (
    <div className={classes.inputWrapper}>
      <TextField
        inputRef={inputRef}
        name={name}
        value={value}
        className={`${isSearchInput ? "" : classes.inputRootStyle} ${className}`}
        autoComplete="off"
        autoFocus={autoFocus}
        variant={solidVariant || isSearchInput ? "outlined" : "standard"}
        fullWidth
        placeholder={placeholder || ""}
        multiline={multiline || false}
        maxRows={multiline ? maxRows : 1}
        error={Boolean(errorText) || Boolean(props.helperText)}
        helperText={errorText ? "" : props.helperText}
        onFocus={(e) =>
          Object.prototype.toString.call(onFocus) == "[object Function]" &&
          onFocus(e)
        }
        onBlur={(e) =>
          Object.prototype.toString.call(onBlur) == "[object Function]" &&
          onBlur(e)
        }
        {...(renderValueAsToken
          ? {
              MenuProps: { className: classes.menu },
              select: true,
              SelectProps: {
                renderValue: (value: unknown) => {
                  if (!Array.isArray(value)) {
                    return null;
                  }
                  return (
                    <div className={classes.tokenWrap}>
                      {value.map((data: string, index: number) => (
                        <MUIToken
                          key={index}
                          label={data}
                          {...(renderValueAsTokenDeletable && {
                            onDelete: () =>
                              handleDeleteToken && handleDeleteToken(data),
                          })}
                        />
                      ))}
                    </div>
                  );
                },
              },
            }
          : props.select
            ? { SelectProps: { MenuProps: { className: classes.menu } } }
            : {})}
        {...rest}
      />
      {characterLimit && characterLimit > 0 && typeof value === "string" ? (
        <div className={classes.errorText}>
          <span className={classes.errorHighlight}>{errorText}</span>
          <span className={!errorText ? classes.count : classes.errorHighlight}>
            {value.length}/{characterLimit}
          </span>
        </div>
      ) : null}
    </div>
  );
}
