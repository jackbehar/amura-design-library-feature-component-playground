import type { TextFieldProps } from "@mui/material";
import type { MutableRefObject } from "react";

type InputFieldPropsBase = Pick<
  TextFieldProps,
  | "label"
  | "value"
  | "defaultValue"
  | "placeholder"
  | "helperText"
  | "error"
  | "disabled"
  | "required"
  | "name"
  | "id"
  | "className"
  | "size"
  | "fullWidth"
  | "select"
  | "autoFocus"
  | "onChange"
  | "onBlur"
  | "onFocus"
  | "onClick"
  | "onKeyDown"
  | "onPaste"
  | "InputProps"
  | "inputProps"
  | "InputLabelProps"
  | "SelectProps"
>;

export interface IProps extends Omit<InputFieldPropsBase, "value"> {
  /**
   * @uxpinbind onChange 0.target.value
   */
  value?: TextFieldProps["value"];
  isReadOnly?: boolean;
  renderValueAsToken?: boolean;
  renderValueAsTokenDeletable?: boolean;
  handleDeleteToken?: Function;
  solidVariant?: boolean;
  placeholder?: string;
  isSearchInput?: boolean;
  errorText?: string;
  showError?: boolean;
  customStyle?: string;
  characterLimit?: number;
  multiline?: boolean;
  maxRows?: number;
  inputTextRef?: MutableRefObject<HTMLInputElement | null>;
  compactMultiline?: boolean;
}
