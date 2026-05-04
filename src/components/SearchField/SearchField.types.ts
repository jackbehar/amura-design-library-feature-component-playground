export interface IProps {
  handleSearch: (value: string) => void;
  maxHeight?: string;
  placeholder?: string;
  customStyle?: string;
  autoFocus?: boolean;
  /**
   * @uxpinbind handleSearch 0
   */
  value?: string;
  disabled?: boolean;
  onKeyDown?: () => void;
  isInputVariant?: boolean;
  setSearchResult?: (results: unknown[]) => void;
  setSearchString?: (value: string) => void;
  isReadOnly?: boolean;
  onFocus?: React.FocusEventHandler;
  onClick?: React.MouseEventHandler;
  disableAutoFocus?: boolean;
  searchIcon?: JSX.Element;
  onPaste?: (text: string) => void;
  isValidEmail?: boolean;
  onAddEmail?: () => void;
}
