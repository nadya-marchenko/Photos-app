export interface SelectConfig {
    label: string;
    id: string;
    options: number[];
    handleSettingPerPageValue: (value: number) => void;
}