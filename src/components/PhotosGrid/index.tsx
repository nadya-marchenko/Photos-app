import React from 'react';
import Grid from '../Grid';
import PropTypes from 'prop-types';
import ModalZoom from '../ModalZoom';
import NoResult from '../NoResult';
import Card from '../Card';
import { PhotosGridConfig } from './PhotosGrid';
import { PreviewPhotosConfig } from '../AlbumCard/AlbumCard';

const PhotosGrid = ({ photos, cardsPerPage, currentPage }: PhotosGridConfig) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [clickedCard, setClickedCard] = React.useState<PreviewPhotosConfig>(photos[0]);

    const openModal = (id: number) =>  {
        const [ openedCard ]: PreviewPhotosConfig[] = photos.filter(image => image.id === id);
        setIsModalOpen(true);
        setClickedCard(openedCard);
    };

    const closeModal: () => void = () => setIsModalOpen(false);

    const firstIndexShowedCard: number = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard: number = firstIndexShowedCard + cardsPerPage;

    const photosShowed: PreviewPhotosConfig[] = photos.slice(firstIndexShowedCard, lastIndexShowedCard);

    return (
        <Grid col={4}>
            <>
                {isModalOpen &&
                    (<ModalZoom 
                        largeImg={clickedCard.url} 
                        title={clickedCard.title}
                        handleCloseModal={closeModal}
                    />)}
            </>
            <>
                {photosShowed.length
                    ? photosShowed.map(({ id, thumbnailUrl, title }: PreviewPhotosConfig) =>
                        <Card
                            key={id} 
                            id={id} 
                            url={thumbnailUrl} 
                            title={title} 
                            col={4}
                            handleZoom={openModal}
                        />
                    )
                    : <NoResult message='No results. Please, try again' />}
            </>
        </Grid>
    );
};

PhotosGrid.propTypes = {
    cardsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default PhotosGrid;