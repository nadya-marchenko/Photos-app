export interface ButtonConfig {
  children: JSX.Element | JSX.Element[] | string;
  color?: string;
  link?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}
