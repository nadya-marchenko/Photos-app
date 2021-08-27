export interface ProfileSectionProps {
  icon: JSX.Element | JSX.Element[];
  title: string;
  inputNames: ProfileInputsProps[];
  col: number;
  id?: number;
  key?: number;
  profileData: ProfileDataProps | undefined;
}

export interface ProfileInputsProps {
  name: string;
  apiName: string;
  type: string;
  id: string;
}

export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ProfileDataProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

export interface InputsWrapperProps {
  col: number;
}
