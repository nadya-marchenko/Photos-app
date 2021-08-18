import React from 'react';
import Grid from '../Grid';
import PropTypes from 'prop-types';
import NoResult from '../NoResult';
import AlbumCard from '../AlbumCard';


const AlbumsGrid = ({ photos, cardsPerPage, currentPage }) => {
    const firstIndexShowedCard = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard = firstIndexShowedCard + cardsPerPage;

    const photosShowed = photos.slice(firstIndexShowedCard, lastIndexShowedCard);

    return (
        <Grid col='3'>
            {photosShowed.length
                ? photosShowed.map(({ id, title, userId }) =>
                    <AlbumCard
                        key={id} 
                        link={`/profile/${userId}/photos`} 
                        title={title}
                        previewPhotosNum={3}
                        albumId={id}
                    />)
                : <NoResult message='No results. Please, try again' />}
        </Grid>
    );
};

AlbumsGrid.propTypes = {
    cardsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default AlbumsGrid;