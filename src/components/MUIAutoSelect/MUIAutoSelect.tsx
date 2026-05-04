import { useEffect, useState } from "react";

import { Autocomplete, Popper, PopperProps } from "@mui/material";

import { useCommonStyles } from "../../theme/CommonStyles";
import InputField from "../InputField/InputField";
import Checkbox from "../MUICheckbox/MUICheckbox";
import MUIToken from "../MUIToken/MUIToken";
import { useStyles, useStylesForMenu } from "./MUIAutoSelect.styles";
import { ArrowDown } from "./MUIAutoSelect.svg";
import { IProps, optionsType } from "./MUIAutoSelect.types";

const CustomPopper = function (props: PopperProps) {
  const { classes } = useStylesForMenu();
  return <Popper {...props} className={classes.root} placement="bottom" />;
};

/**
 * @uxpindocurl https://mui.com/material-ui/react-autocomplete/
 * @uxpindescription Autocomplete built on MUI with Amura InputField, tokens, and custom option rows.
 */
export default function MUIAutoSelect(props: IProps) {
  const {
    className,
    multiple,
    InputProps,
    error,
    reRenderOptions,
    OptionMenuProps,
    noDeletableToken,
    renderOption,
    options,
    ...restProps
  } = props;
  const { classes } = useStyles(props);
  const commonStyles = useCommonStyles();

  const [innerOptions, setInnerOptions] = useState<Array<optionsType>>(options);

  useEffect(() => {
    if (reRenderOptions) {
      setInnerOptions([...options]);
    }
  }, [options, reRenderOptions]);

  return (
    <Autocomplete
      disableClearable
      popupIcon={<ArrowDown />}
      forcePopupIcon
      getOptionLabel={(option: optionsType) => option?.label || ""}
      onKeyDown={(e) => {
        e.stopPropagation();
      }}
      renderInput={(params) => (
        <InputField error={error ? error : false} {...params} {...InputProps} />
      )}
      {...{
        renderTags: (value, getTagProps) => {
          return (
            <div className={classes.tokenWrapper}>
              {value.map((option: optionsType, index) => {
                const { onDelete = () => {} } = getTagProps({ index });
                return (
                  <MUIToken
                    key={option?.value}
                    label={option?.label}
                    {...(!noDeletableToken ? { onDelete } : {})}
                  />
                );
              })}
            </div>
          );
        },
      }}
      className={`${commonStyles.body15Regular} ${classes.SelectRoot} ${className || ""}`}
      PopperComponent={CustomPopper}
      renderOption={(liProps, option: optionsType, { selected, ...rest }) => (
        <div className={classes.mainMenuWrapper} key={option?.value}>
          {OptionMenuProps?.variant === "checkbox" ? (
            <Checkbox checked={selected} />
          ) : null}

          {renderOption ? (
            renderOption(
              liProps as React.HTMLAttributes<HTMLLIElement>,
              option,
              { selected, ...rest },
            )
          ) : (
            <li
              {...liProps}
              className={`${classes.optionsWrap} ${OptionMenuProps?.customStyle || ""}`}
            >
              <div className={`${commonStyles.body15Regular} ${classes.label}`}>
                {option?.label}
              </div>
              {option?.subLabel ? (
                <div
                  className={`${commonStyles.caption12Regular} ${classes.label}`}
                >
                  {option?.subLabel}
                </div>
              ) : null}
            </li>
          )}
        </div>
      )}
      options={reRenderOptions ? innerOptions : options}
      multiple={multiple}
      {...restProps}
    />
  );
}
