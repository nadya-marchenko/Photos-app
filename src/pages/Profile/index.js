import React, { useEffect, useState } from 'react';
import ProfileSection from '../../components/ProfileSection';
import { profileConfig } from './ProfileConfig';
import { PageHeadline, ProfileWrapper } from './Profile.styled';
import axios from 'axios';
import { API_URL } from '../../global/app-config-constants';
import { checkErrorsFromAPI } from '../../utils';
import WithLoading from '../../components/WithLoading';

const ProfileSectionWithLoading = WithLoading(ProfileSection);

const Profile = ({ match }) => {
    const [ profileData, setProfileData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const user = Number(match.params.user);

    useEffect(() => {
        const getData = () => {
            axios.get(`${API_URL}/users`)
                .then(({ data }) => setProfileData(...data.filter(({ id }) => id === user)))
                .catch(() => checkErrorsFromAPI())
                .finally(() => setIsLoading(false));
        };
        setIsLoading(true);
        getData();
    }, [user]);
    
    return (
        <>
            <PageHeadline>Your profile</PageHeadline>
            <ProfileWrapper>
                {profileConfig.map(({ icon, title, inputNames, col, id }) => 
                    <ProfileSectionWithLoading
                        isLoading={isLoading}
                        key={id}
                        icon={icon}
                        title={title}
                        inputNames={inputNames}
                        col={col}
                        id={id}
                        profileData={profileData}
                />)}
            </ProfileWrapper>
            </>
            );
}

export default Profile;