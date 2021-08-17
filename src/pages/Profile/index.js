import React from 'react';
import ProfileSection from '../../components/ProfileSection';
import { profileData } from '../../global/app-config-constants';
import { PageHeadline, ProfileWrapper } from './Profile.styled';

const Profile = () => {
    return (
        <>
            <PageHeadline>Your profile</PageHeadline>
            <ProfileWrapper>
                {profileData.map(({ icon, title, inputNames, col, id }) => 
                    <ProfileSection
                        key={id}
                        icon={icon}
                        title={title}
                        inputNames={inputNames}
                        col={col}
                        id={id}
                />)}
            </ProfileWrapper>
            </>
            );
}

export default Profile;