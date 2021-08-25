export interface SelectProps {
  label: string;
  id: string;
  options: number[];
  handleSettingPerPageValue: (value: number) => void;
}
