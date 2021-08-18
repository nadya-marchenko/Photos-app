import React from 'react';
import Grid from '../Grid';
import NoResult from '../NoResult';
import AlbumCard from '../AlbumCard';
import { AlbumGridValues } from './AlbumGrid';
import { PreviewPhotosConfig } from '../AlbumCard/AlbumCard';

const AlbumsGrid = ({ photos, cardsPerPage, currentPage }: AlbumGridValues) => {
    const firstIndexShowedCard: number = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard: number = firstIndexShowedCard + cardsPerPage;

    const photosShowed: PreviewPhotosConfig[] = photos.slice(firstIndexShowedCard, lastIndexShowedCard);

    return (
        <Grid col='3'>
            {photosShowed.length
                ? photosShowed.map(({ id, title, userId }: PreviewPhotosConfig) =>
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

export default AlbumsGrid;