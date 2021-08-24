import React from 'react';
import Input from '../Input';
import { HeaderWrapper, InputsWrapper, SectionWrapper } from './ProfileSection.styled';
import { ProfileDataConfig, ProfileInputsConfig, ProfileSectionConfig } from './ProfileSection';

const ProfileSection = ({ icon, title, inputNames, col, profileData }: ProfileSectionConfig) => 
    <SectionWrapper>
            <HeaderWrapper>
                <span>{icon}</span>
                <h2>{title}</h2>
            </HeaderWrapper>
            <InputsWrapper col={col}>
                {inputNames.map(({ name, apiName, type, id }: ProfileInputsConfig) => 
                    <Input
                        key={id}
                        type={type}
                        label={name}
                        id={id}
                        defaultValue={profileData.hasOwnProperty(title) ? profileData[title][apiName] : profileData[apiName]}
                    />)}
            </InputsWrapper>
        </SectionWrapper>;

export default ProfileSection;