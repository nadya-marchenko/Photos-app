import React from 'react';
import Grid from '../Grid/Grid';
import ModalZoom from '../ModalZoom/ModalZoom';
import NoResult from '../NoResult/NoResult';
import Card from '../Card/Card';
import { PhotosGridProps } from './PhotosGrid.d';
import { Photos } from '../../pages/Photos/Photos.d';

const PhotosGrid = ({ photos, cardsPerPage, currentPage }: PhotosGridProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [clickedCard, setClickedCard] = React.useState<Photos>(photos[0]);

  const openModal = (id: number) => {
    const [openedCard]: Photos[] = photos.filter((image) => image.id === id);
    setIsModalOpen(true);
    setClickedCard(openedCard);
  };

  const closeModal: () => void = () => setIsModalOpen(false);

  const firstIndexShowedCard: number = cardsPerPage * (currentPage - 1);
  const lastIndexShowedCard: number = firstIndexShowedCard + cardsPerPage;

  const photosShowed: Photos[] = photos.slice(
    firstIndexShowedCard,
    lastIndexShowedCard,
  );

  return (
    <Grid col={4}>
      <>
        {isModalOpen && (
          <ModalZoom
            largeImg={clickedCard.url}
            title={clickedCard.title}
            handleCloseModal={closeModal}
          />
        )}
      </>
      <>
        {photosShowed.length ? (
          photosShowed.map(({ id, thumbnailUrl, title }: Photos) => (
            <Card
              key={id}
              id={id}
              url={thumbnailUrl}
              title={title}
              col={4}
              handleZoom={openModal}
            />
          ))
        ) : (
          <NoResult message="No results. Please, try again" />
        )}
      </>
    </Grid>
  );
};

export default PhotosGrid;
