import React, { useState, useEffect } from 'react';
import { PageHeadline, PhotoHeadContainer } from './Albums.styled';
import Pagination from '../../components/Pagination';
import PropTypes from 'prop-types';
import NoResult from '../../components/NoResult';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import Search from '../../components/Search';
import WithLoading from '../../components/WithLoading';
import AlbumsGrid from '../../components/AlbumsGrid';

const AlbumsGridWithLoading = WithLoading(AlbumsGrid);

const Albums = ({ apiUrl, match }) => {
    const user = match.params.user;
    const API_URL_ALBUMS = `${apiUrl}/users/${user}/albums`;

    const [photos, setPhotos] = useState([]);
    const [filteredValue, setFilteredValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageNum = Math.ceil(photos.length / cardsPerPage);

    const filterImages = (newFilteredValue) => setFilteredValue(newFilteredValue);

    useEffect(() => {
        const getPhoto = () => {
            axios.get(API_URL_ALBUMS)
                .then(response => {
                    setPhotos(getFilteredPhotos(response.data, filteredValue))
                })
                .catch(() => {
                    setIsError(true);
                    checkErrorsFromAPI();
                })
                .finally(() => setIsLoading(false));
        } 
        setIsLoading(true);
        getPhoto();
    }, [API_URL_ALBUMS, filteredValue]);

    const getFilteredPhotos = (photos, filteredValue) => photos.filter(photoEl => photoEl.title.includes(filteredValue));

    const changeCurrentPage = newCurrentPage => {
        setIsLoading(true);
        !(newCurrentPage < 1 || newCurrentPage > pageNum) 
            && setCurrentPage(newCurrentPage);
        setIsLoading(false);
    } 

    const changePerPageValue = newPerPageValue => {
        setIsLoading(true);
        setCardsPerPage(newPerPageValue);
        setCurrentPage(1);
        setIsLoading(false);
    };

    return (
        <>
            <PhotoHeadContainer>
                <PageHeadline>Your albums</PageHeadline>
                <Search filterImages={filterImages} />
            </PhotoHeadContainer>
            {isError 
                ? <NoResult message='Problems with API. Please try again' />
                : <AlbumsGridWithLoading 
                    isLoading={isLoading} 
                    photos={photos} 
                    cardsPerPage={cardsPerPage} 
                    currentPage={currentPage} 
                    apiUrl={apiUrl}
                    albumId={user}
                    />}
            <Pagination 
                activePage={currentPage} 
                pageNum={pageNum} 
                showedAmount={5} 
                changeCurrentPage={changeCurrentPage}
                changePerPageValue={changePerPageValue}
                handleLeftArrow={() => changeCurrentPage(currentPage - 1)}
                handleRightArrow={() => changeCurrentPage(currentPage + 1)}
            />
        </>
    );
};

Albums.propTypes = {
    apiUrl: PropTypes.string.isRequired,
};

export default Albums;