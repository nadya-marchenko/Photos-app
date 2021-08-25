import React from 'react';
import Input from '../Input/Input';
import {
  HeaderWrapper,
  InputsWrapper,
  SectionWrapper,
} from './ProfileSection.styled';
import { ProfileInputsProps, ProfileSectionProps } from './ProfileSection.d';

const ProfileSection = ({
  icon,
  title,
  inputNames,
  col,
  profileData,
}: ProfileSectionProps) => {
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
        <h2 data-testid="profileTitle">{title}</h2>
      </HeaderWrapper>
      <InputsWrapper col={col} data-testid="profileSection">
        {inputNames.map(({ name, apiName, type, id }: ProfileInputsProps) => (
          <Input
            key={id}
            type={type}
            label={name}
            id={apiName}
            defaultValue={getDefaultValue(apiName)}
          />
        ))}
      </InputsWrapper>
    </SectionWrapper>
  );
};

export default ProfileSection;
