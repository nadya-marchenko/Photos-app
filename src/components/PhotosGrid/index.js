import React, { useState } from 'react';
import Grid from '../Grid';
import PropTypes from 'prop-types';
import ModalZoom from '../ModalZoom';
import NoResult from '../NoResult';
import Card from '../Card';

const PhotosGrid = ({ photos, cardsPerPage, currentPage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedCard, setClickedCard] = useState('');

    const openModal = (id) =>  {
        const openedCard = photos.filter(image => image.id === id)[0];
        setIsModalOpen(true);
        setClickedCard(openedCard);
    };

    const closeModal = () => setIsModalOpen(false);

    const firstIndexShowedCard = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard = firstIndexShowedCard + cardsPerPage;

    const photosShowed = photos.slice(firstIndexShowedCard, lastIndexShowedCard);

    return (
        <Grid col='4'>
            {isModalOpen &&
                <ModalZoom 
                    largeImg={clickedCard.url} 
                    title={clickedCard.title}
                    handleCloseModal={closeModal}
                />}
            {photosShowed.length
                ? photosShowed.map(image =>
                    <Card
                        key={image.id} 
                        id={image.id} 
                        url={image.thumbnailUrl} 
                        title={image.title} 
                        col='4'
                        handleZoom={openModal}
                    />
                )
                : <NoResult message='No results. Please, try again' />}
        </Grid>
    );
};

PhotosGrid.propTypes = {
    cardsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default PhotosGrid;