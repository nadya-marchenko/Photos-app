import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { HeaderWrapper, InputsWrapper, SectionWrapper } from './ProfileSection.styled';

const ProfileSection = ({ icon, title, inputNames, col, profileData }) => 
    <SectionWrapper>
            <HeaderWrapper>
                <span>{icon}</span>
                <h2>{title}</h2>
            </HeaderWrapper>
            <InputsWrapper col={col}>
                {inputNames.map(({ name, apiName, type, id }) => 
                    <Input
                        key={id}
                        type={type}
                        label={name}
                        id={id}
                        defaultValue={profileData[title] ? profileData[title][apiName] : profileData[apiName]}
                    />)}
            </InputsWrapper>
        </SectionWrapper>;

ProfileSection.prototype = {
    icon: PropTypes.any,
    title: PropTypes.string.isRequired,
    inputNames: PropTypes.array.isRequired,
    col: PropTypes.number,
    profileData: PropTypes.array.isRequired,
}

export default ProfileSection;