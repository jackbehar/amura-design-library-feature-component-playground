import { useEffect, useRef, useState } from "react";

import { ClickAwayListener, debounce } from "@mui/material";

import InputField from "../InputField/InputField";
import { useStyles } from "./SuggestiveInput.styles";
import { IOptions, ISearchWithPopUp } from "./SuggestiveInput.types";

export default function SuggestiveInput(props: ISearchWithPopUp) {
  const {
    placeholder,
    listRenderer,
    helperText,
    label,
    values,
    onInputChange,
    onSearchAPICall,
    onDropDownOptionClick,
  } = props;
  const [search, setSearch] = useState(values ?? "");
  const [localoptions, setLocaloptions] = useState<IOptions[]>([]);
  const elementRef = useRef(false);

  const [suggestionIndex, setSuggestionIndex] = useState<number>(0);

  const { classes } = useStyles();
  const focusRef = useRef(false);

  useEffect(() => {
    if (values) setSearch(values);
  }, [values]);

  const handleSearch = async (
    _e: React.ChangeEvent<HTMLInputElement>,
    searchValue: string,
  ) => {
    if (onSearchAPICall && searchValue) {
      const options = await onSearchAPICall(searchValue);
      if (options) setLocaloptions(options);
      return;
    }
    if (!searchValue) setLocaloptions([]);
  };

  const debounceSearchFun = debounce(handleSearch, 500);

  const handleClickOnDropDownOptions = (
    e: React.MouseEvent,
    data: IOptions,
  ) => {
    e.stopPropagation();
    setSearch(data.label);
    setLocaloptions([]);
    onDropDownOptionClick?.(e, data);
  };

  const handleFocus = () => {
    if (!focusRef.current) {
      document.execCommand("selectall");
      focusRef.current = true;
    }
  };
  const handleBlur = () => {
    focusRef.current = false;
  };

  return (
    <div className={classes.rootRelativeContainer}>
      <div className={classes.dflex}>
        <InputField
          className={classes.searchbox}
          label={label ?? "Search items"}
          value={search}
          placeholder={placeholder ?? "Search items"}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Escape") {
              setLocaloptions([]);
              setSuggestionIndex(0);
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              if (localoptions.length - 1 > suggestionIndex)
                setSuggestionIndex((prev) => prev + 1);
              else setSuggestionIndex(0);
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              if (suggestionIndex !== 0) setSuggestionIndex((prev) => prev - 1);
            }
            if (e.key === "Enter") {
              if (localoptions.length > 0) {
                setSearch(localoptions[suggestionIndex].label);
                onDropDownOptionClick?.(e, localoptions[suggestionIndex]);
                setLocaloptions([]);
              }
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.trim()
              ? e.target.value
              : e.target.value.trim();
            onInputChange(e, value);
            setSearch(value);
            debounceSearchFun(e, value);
          }}
          onClick={handleFocus}
          onBlur={handleBlur}
          helperText={helperText ?? ""}
        />
      </div>

      {localoptions?.length > 0 && (
        <ClickAwayListener
          onClickAway={() => {
            if (!elementRef.current) setLocaloptions([]);
          }}
        >
          <section className={classes.popup}>
            {localoptions.map((data, index) => (
              <div
                key={index}
                className={
                  suggestionIndex === index
                    ? `${classes.spaceBetween} ${classes.highlightOption}`
                    : `${classes.spaceBetween}`
                }
                onClick={(e) => handleClickOnDropDownOptions(e, data)}
              >
                {listRenderer(data)}
              </div>
            ))}
          </section>
        </ClickAwayListener>
      )}
    </div>
  );
}
