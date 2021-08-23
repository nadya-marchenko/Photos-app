import React from 'react';
import Grid from '../Grid/Grid';
import NoResult from '../NoResult/NoResult';
import AlbumCard from '../AlbumCard/AlbumCard';
import { AlbumGridValues } from './AlbumGrid.d';
import { AlbumsConfig } from '../../pages/Albums/Albums.d';

const AlbumsGrid = ({ photos, cardsPerPage, currentPage }: AlbumGridValues) => {
  const firstIndexShowedCard: number = cardsPerPage * (currentPage - 1);
  const lastIndexShowedCard: number = firstIndexShowedCard + cardsPerPage;

  const photosShowed: AlbumsConfig[] = photos.slice(
    firstIndexShowedCard,
    lastIndexShowedCard,
  );

  return (
    <Grid col={3}>
      {photosShowed.length ? (
        photosShowed.map(({ id, title, userId }: AlbumsConfig) => (
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
