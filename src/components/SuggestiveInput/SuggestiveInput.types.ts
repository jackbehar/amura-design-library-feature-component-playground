import { MouseEventHandler, ReactNode } from "react";

export interface IOptions {
  label: string;
  value: string;
}

export interface ISearchWithPopUp {
  placeholder?: string;
  label?: string;
  helperText?: string;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
  onSearchAPICall: (searchValue: string) => Promise<IOptions[]>;
  onDropDownOptionClick?: (
    event: React.MouseEvent | React.KeyboardEvent,
    data: IOptions,
  ) => void;
  values?: string;
  listRenderer: (data: IOptions) => ReactNode;
}

export interface ISearchPopUp {
  searchedData?: IOptions[];
  setshowPopup: (show: boolean) => void;
  onDropDownOptionClick: (event: React.MouseEvent, data: IOptions) => void;
  suggestionIndex?: number;
}

export interface IRowProps {
  searchData?: string;
  onDropDownOptionClick: MouseEventHandler;
}
