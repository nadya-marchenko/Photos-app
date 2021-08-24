export interface ButtonConfig {
    children: JSX.Element|JSX.Element[];
    color?: string;
    link?: string;
    type?: 'submit' | 'reset' | 'button' | undefined
}