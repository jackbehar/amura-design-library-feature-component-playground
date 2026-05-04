import { useEffect, useRef, useState } from "react";

import { InputAdornment } from "@mui/material";

import { useCommonStyles } from "../../theme/CommonStyles";
import InputField from "../InputField/InputField";
import { useStyles } from "./SearchField.styles";
import { CrossIcon, SearchIcon, TickIcon } from "./SearchField.svg";
import { IProps } from "./SearchField.types";

export default function SearchField(props: IProps) {
  const {
    disabled,
    customStyle,
    handleSearch,
    onPaste,
    isInputVariant,
    value,
    onKeyDown,
    setSearchResult,
    setSearchString,
    isReadOnly,
    autoFocus,
    searchIcon,
    isValidEmail,
    onAddEmail,
    ...restprops
  } = props;
  const { classes } = useStyles(props);
  const commonClasses = useCommonStyles();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isReadOnly) return;
    if (value || value === "") setSearch(value);
  }, [value, isReadOnly]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isReadOnly) return;
    const newValue = event.target.value.trim()
      ? event.target.value
      : event.target.value.trim();
    setSearch(newValue);
    handleSearch(newValue);
  };

  const handleClear = () => {
    setSearch("");
    handleSearch("");
    setSearchString?.("");
    setSearchResult?.([]);
    if (inputRef.current?.focus) {
      inputRef.current.focus();
    }
  };

  return (
    <InputField
      {...restprops}
      fullWidth
      className={`${commonClasses.body15Regular} ${!isInputVariant ? classes.inputWrap : ""} ${customStyle || ""}`}
      value={search}
      disabled={disabled}
      size="small"
      inputTextRef={inputRef}
      isSearchInput={!isInputVariant}
      onChange={handleChange}
      onPaste={(e: React.ClipboardEvent) => {
        if (onPaste) {
          e.preventDefault();
          onPaste(e.clipboardData.getData("Text"));
        }
      }}
      autoFocus={autoFocus || false}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "Enter" && onKeyDown) {
          (event.target as HTMLElement).blur();
          onKeyDown();
        }
      }}
      InputProps={{
        readOnly: isReadOnly,
        startAdornment: (
          <InputAdornment position="start">
            {searchIcon ? searchIcon : <SearchIcon />}
          </InputAdornment>
        ),
        endAdornment: !isInputVariant ? (
          !isValidEmail ? (
            <InputAdornment
              className={`${classes.clearIcon} ${search && "visible"}`}
              position="end"
              onClick={handleClear}
            >
              <CrossIcon />
            </InputAdornment>
          ) : (
            <InputAdornment
              className={`${classes.clearIcon} ${search && "visible"}`}
              position="end"
              onClick={() => onAddEmail?.()}
            >
              <TickIcon />
            </InputAdornment>
          )
        ) : null,
      }}
    />
  );
}
