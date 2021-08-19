export interface ProfileSectionConfig {
    icon: JSX.Element|JSX.Element[];
    title: string;
    inputNames: ProfileInputsConfig[];
    col?: number;
    id?: number;
    key?: number;
    profileData: ProfileDataConfig[];
}

export interface ProfileInputsConfig {
    name: string;
    apiName: string;
    type: string;
    id: string;
}

export interface AddressConfig {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface CompanyConfig {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ProfileDataConfig {
    [key: string]: any;
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressConfig;
    phone: string;
    website: string;
    company: CompanyConfig;
}

export interface InputsWrapperProps {
    col: number | undefined;
}