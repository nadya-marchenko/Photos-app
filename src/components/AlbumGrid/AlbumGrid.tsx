import React from 'react';
import Grid from '../Grid/Grid';
import NoResult from '../NoResult/NoResult';
import AlbumCard from '../AlbumCard/AlbumCard';
import { AlbumGridProps } from './AlbumGrid.d';
import { Albums } from '../../pages/Albums/Albums.d';

const AlbumsGrid = ({ photos, cardsPerPage, currentPage }: AlbumGridProps) => {
  const firstIndexShowedCard: number = cardsPerPage * (currentPage - 1);
  const lastIndexShowedCard: number = firstIndexShowedCard + cardsPerPage;

  const photosShowed: Albums[] = photos.slice(
    firstIndexShowedCard,
    lastIndexShowedCard,
  );

  return (
    <Grid col={3}>
      {photosShowed.length ? (
        photosShowed.map(({ id, title, userId }: Albums) => (
          <AlbumCard
            key={id}
            link={`/profile/${userId}/photos`}
            title={title}
            previewPhotosNum={3}
            albumId={id}
          />
        ))
      ) : (
        <NoResult message="No results. Please, try again" />
      )}
    </Grid>
  );
};

export default AlbumsGrid;
