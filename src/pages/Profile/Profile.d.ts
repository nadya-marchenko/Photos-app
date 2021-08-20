import { ProfileInputsConfig } from "../../components/ProfileSection/ProfileSection";

export interface ProfileConfigProps {
  icon: JSX.Element|JSX.Element[];
  title: string;
  inputNames: ProfileInputsConfig[];
  col: number;
  id: number;
}