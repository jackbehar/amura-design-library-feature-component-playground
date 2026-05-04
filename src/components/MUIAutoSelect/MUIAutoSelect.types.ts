import {
  AutocompleteProps,
  AutocompleteRenderOptionState,
} from "@mui/material";

import { IProps as InputFieldProps } from "../InputField/InputField.types";

export interface optionsType {
  label: string;
  value: string;
  subLabel?: string;
}

export interface IOptionMenuProps {
  reverseCheckbox?: boolean;
  inlineLabel?: boolean;
  variant?: "checkbox" | "label";
  customStyle?: string;
  endAdornmentNotFlex?: boolean;
}

type MUIAutoSelectPropsBase = Pick<
  AutocompleteProps<optionsType, boolean, boolean, boolean>,
  | "value"
  | "defaultValue"
  | "multiple"
  | "disabled"
  | "readOnly"
  | "size"
  | "onChange"
  | "onInputChange"
  | "onOpen"
  | "onClose"
  | "open"
  | "disableCloseOnSelect"
  | "filterSelectedOptions"
  | "blurOnSelect"
  | "clearOnBlur"
  | "autoHighlight"
  | "autoSelect"
  | "loading"
  | "loadingText"
  | "noOptionsText"
  | "isOptionEqualToValue"
  | "getOptionDisabled"
  | "renderInput"
  | "className"
  | "id"
  | "sx"
>;

export interface IProps extends Partial<MUIAutoSelectPropsBase> {
  options: Array<optionsType>;
  InputProps?: InputFieldProps;
  OptionMenuProps?: IOptionMenuProps;
  noDeletableToken?: boolean;
  reRenderOptions?: boolean;
  error?: boolean;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: optionsType,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;
}

export interface ICustomMenuProps extends IOptionMenuProps {
  label: string;
  subLabel?: string;
  selected?: boolean;
}
