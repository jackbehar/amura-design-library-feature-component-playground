export interface IProfileProgress {
  [key: string]: number | string;
  progreesColor: string;
}

export interface IProps {
  id: string;
  customStyle?: string;
  headerTitle: string;
  tooltipText: string;
  rangeHeader: string;
  onRangeChange: (value: { [key: string]: number }) => void;
  defaultRangeValue: number;
  isResetFilter?: boolean;
  profileProgress: Array<IProfileProgress>;
}

export const marks = [
  { value: 0, label: "0" },
  { value: 2, label: "2" },
  { value: 4, label: "4" },
  { value: 6, label: "6" },
  { value: 8, label: "8" },
  { value: 10, label: "10" },
];
