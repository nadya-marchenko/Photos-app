export interface InputConfig {
    type: string;
    label: string;
    id: string;
    icon: JSX.Element;
    placeholder: string;
    onChangeHandler(): any;
    value?: string;
    defaultValue?: string;
}

export interface InputWrapperProps {
    type?: string;
}