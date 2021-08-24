export interface InputConfig {
    key?: string;
    type: string;
    label: string;
    id: string;
    icon?: JSX.Element;
    placeholder?: string;
    onChangeHandler?: (event: { target: HTMLInputElement; }) => void;
    value?: string;
    defaultValue?: string;
}

export interface InputWrapperProps {
    type?: string;
}