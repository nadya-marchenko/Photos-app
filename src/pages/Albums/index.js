import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../components/Grid';

const Albums = ({ apiUrl, match }) => {
    const user = match.params.user;
    const API_URL_ALBUMS = `${apiUrl}/users/${user}/albums`;

    return(
        <Grid col='3'></Grid>
    );
};

Albums.propTypes = {
    apiUrl: PropTypes.string.isRequired,
};

export default Albums;