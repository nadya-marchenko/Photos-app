import React, { useEffect } from 'react';
import ProfileSection from '../../components/ProfileSection';
import { profileConfig } from './ProfileConfig';
import { PageHeadline, ProfileWrapper } from './Profile.styled';
import axios from 'axios';
import { API_URL } from '../../global/app-config-constants';
import { checkErrorsFromAPI } from '../../utils';
import WithLoading from '../../components/WithLoading';
import { ProfileDataConfig, ProfileSectionConfig } from '../../components/ProfileSection/ProfileSection';

const ProfileSectionWithLoading = WithLoading(ProfileSection);

const Profile = ({ match }) => {
    const [ profileData, setProfileData ] = React.useState<ProfileDataConfig[]>([]);
    const [ isLoading, setIsLoading ] = React.useState<boolean>(false);

    const user: number = Number(match.params.user);

    const API_URL_USERS: string = `${API_URL}/users`;

    useEffect(() => {
        const getData = () => {
            axios.get(API_URL_USERS)
                .then(({ data }) => setProfileData([...data.filter(({ id }) => id === user)]))
                .catch(({ data }) => checkErrorsFromAPI(data))
                .finally(() => setIsLoading(false));
        };
        setIsLoading(true);
        getData();
    }, [API_URL_USERS, user]);
    
    return (
        <>
            <PageHeadline>Your profile</PageHeadline>
            <ProfileWrapper>
                {profileConfig.map(({ icon, title, inputNames, col, id }: ProfileSectionConfig) => 
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