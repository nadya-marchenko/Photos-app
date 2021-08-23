import React from 'react';
import Input from '../Input/Input';
import {
  HeaderWrapper,
  InputsWrapper,
  SectionWrapper,
} from './ProfileSection.styled';
import { ProfileInputsConfig, ProfileSectionConfig } from './ProfileSection.d';

const ProfileSection = ({
  icon,
  title,
  inputNames,
  col,
  profileData,
}: ProfileSectionConfig) => {
  const getDefaultValue = (apiName: string) => {
    if (!profileData) return '';
    return (profileData as any)[title]
      ? (profileData as any)[title][apiName]
      : (profileData as any)[apiName];
  };

  return (
    <SectionWrapper>
      <HeaderWrapper>
        <span>{icon}</span>
        <h2>{title}</h2>
      </HeaderWrapper>
      <InputsWrapper col={col}>
        {inputNames.map(({ name, apiName, type, id }: ProfileInputsConfig) => (
          <Input
            key={id}
            type={type}
            label={name}
            id={id}
            defaultValue={getDefaultValue(apiName)}
          />
        ))}
      </InputsWrapper>
    </SectionWrapper>
  );
};

export default ProfileSection;
