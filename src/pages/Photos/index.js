import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Input from '../../components/Input';
import { PageHeadline, PhotoHeadContainer, SearchRow } from './Photos.styled';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '../../components/Pagination';
import PropTypes from 'prop-types';
import NoResult from '../../components/NoResult';
import ModalZoom from '../../components/ModalZoom';
import axios from 'axios';
import Loader from '../../components/Loader';


const Photos = ({ profile }) => {
    const [photos, setPhotos] = useState([]);
    const [filteredValue, setFilteredValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [clickedCard, setClickedCard] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);

    const firstIndexShowedCard = cardsPerPage * (currentPage - 1);
    const lastIndexShowedCard = firstIndexShowedCard + cardsPerPage;

    const photosShowed = photos.slice(firstIndexShowedCard, lastIndexShowedCard);
    
    const API_URL = `https://jsonplaceholder.typicode.com/albums/${profile}/photos`;

    const pageNum = Math.ceil(photos.length / cardsPerPage);

    const handleInput = e => {
        setInputValue(e.target.value);
    };

    const filterImages = (newFilteredValue) => {
        setFilteredValue(newFilteredValue);
    };

    const handleSearchBtn = (e) => {
        e.preventDefault();
        filterImages(inputValue);
    };

    const openModal = (id) =>  {
        const openedCard = photos.filter(image => image.id === id)[0];
        setIsModalOpen(true);
        setClickedCard(openedCard);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const checkErrorsFromAPI = (response) => {
        if(response.status !== 200) {
            setIsError(true);
            throw new Error(response.statusText);
        }
    };

    useEffect(() => {
        const getPhoto = () => {
            axios.get(API_URL)
                .then(response => {
                    setPhotos(getFilteredPhotos(response.data, filteredValue))
                })
                .catch(() => checkErrorsFromAPI())
                .finally(() => setIsLoading(false));
        } 
        setIsLoading(true);
        getPhoto();
    }, [API_URL, filteredValue]);

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
                <SearchRow onSubmit={handleSearchBtn} >
                    <Input 
                        type='search' 
                        label='Search by title' 
                        id='search' 
                        icon={<SearchIcon />}
                        value={inputValue}
                        onChangeHandler={handleInput}
                    />
                    <Button 
                        type='submit'
                        color='default'
                    >
                        Search
                    </Button>
                </SearchRow>
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
    profile: PropTypes.string.isRequired,
}

export default Photos;