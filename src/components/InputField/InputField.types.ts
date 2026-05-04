import { StandardTextFieldProps } from "@mui/material";

export interface IProps extends StandardTextFieldProps {
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
  inputTextRef?: React.MutableRefObject<HTMLInputElement>;
  compactMultiline?: boolean;
}
