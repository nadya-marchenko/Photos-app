import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import { PageHeadline, PhotoHeadContainer } from './Photos.styled';
import Pagination from '../../components/Pagination';
import PropTypes from 'prop-types';
import NoResult from '../../components/NoResult';
import ModalZoom from '../../components/ModalZoom';
import axios from 'axios';
import Loader from '../../components/Loader';
import { checkErrorsFromAPI } from '../../utils';
import Search from '../../components/Search';


const Photos = ({ apiUrl, album }) => {
    const API_URL_PHOTOS = `${apiUrl}/albums/${album}/photos`;

    const [photos, setPhotos] = useState([]);
    const [filteredValue, setFilteredValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [clickedCard, setClickedCard] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);

    const firstIndexShowedCard = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard = firstIndexShowedCard + cardsPerPage;

    const photosShowed = photos.slice(firstIndexShowedCard, lastIndexShowedCard);
    
    const pageNum = Math.ceil(photos.length / cardsPerPage);

    const filterImages = (newFilteredValue) => setFilteredValue(newFilteredValue);

    const openModal = (id) =>  {
        const openedCard = photos.filter(image => image.id === id)[0];
        setIsModalOpen(true);
        setClickedCard(openedCard);
    };

    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const getPhoto = () => {
            axios.get(API_URL_PHOTOS)
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
    }, [API_URL_PHOTOS, filteredValue]);

    const getFilteredPhotos = (photos, filteredValue) => photos.filter(photoEl => photoEl.title.includes(filteredValue));

    const changeCurrentPage = newCurrentPage => {
        !(newCurrentPage < 1 || newCurrentPage > pageNum) 
            && setCurrentPage(newCurrentPage);
    } 

    const changePerPageValue = newPerPageValue => {
        setCardsPerPage(newPerPageValue);
        setCurrentPage(1);
    };

    return (
        <>
            <PhotoHeadContainer>
                <PageHeadline>Your photos</PageHeadline>
                <Search filterImages={filterImages} />
            </PhotoHeadContainer>
            {isError 
            ? <NoResult message='Problems with API. Please try again' />
            : (isLoading 
                ? <Loader />
                : <Grid col='4'>
                    {isModalOpen &&
                        <ModalZoom 
                            largeImg={clickedCard.url} 
                            title={clickedCard.title}
                            handleCloseModal={closeModal}
                        />}
                    {!photos.length 
                        ? <NoResult message='No results. Please, try again' /> 
                        : photosShowed.map(image =>
                            <Card
                                key={image.id} 
                                id={image.id} 
                                url={image.thumbnailUrl} 
                                title={image.title} 
                                col='4'
                                handleZoom={openModal}
                            />
                        )}
                </Grid>)}
            {photos.length > 10 
                && <Pagination 
                    activePage={currentPage} 
                    pageNum={pageNum} 
                    showedAmount={5} 
                    changeCurrentPage={changeCurrentPage}
                    changePerPageValue={changePerPageValue}
                    handleLeftArrow={() => changeCurrentPage(currentPage - 1)}
                    handleRightArrow={() => changeCurrentPage(currentPage + 1)}
                />}
        </>
    );
};

Photos.propTypes = {
    apiUrl: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
}

export default Photos;