import React from 'react';
import Grid from '../Grid';
import PropTypes from 'prop-types';
import NoResult from '../NoResult';
import AlbumCard from '../AlbumCard';


const AlbumsGrid = ({ photos, cardsPerPage, currentPage, albumId, apiUrl }) => {
    const firstIndexShowedCard = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard = firstIndexShowedCard + cardsPerPage;

    const photosShowed = photos.slice(firstIndexShowedCard, lastIndexShowedCard);

    return (
        <Grid col='3'>
            {photosShowed.length
                ? photosShowed.map(({ id, title }) =>
                    <AlbumCard
                        key={id} 
                        link={`/profile/${albumId}/photos`} 
                        title={title}
                        previewPhotosNum={3}
                        albumId={id}
                        apiUrl={apiUrl}
                    />)
                : <NoResult message='No results. Please, try again' />}
        </Grid>
    );
};

AlbumsGrid.propTypes = {
    cardsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    albumId: PropTypes.string.isRequired,
    apiUrl: PropTypes.string.isRequired,
};

export default AlbumsGrid;