import { ProfileInputsProps } from '../../components/ProfileSection/ProfileSection';

export interface ProfileProps {
  icon: JSX.Element | JSX.Element[];
  title: string;
  inputNames: ProfileInputsProps[];
  col: number;
  id: number;
}
