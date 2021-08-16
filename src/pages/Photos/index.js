import React, { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import Input from '../../components/Input';
import { PageHeadline, PhotoHeadContainer, SearchRow } from './Photos.styled';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '../../components/Pagination';
import PropTypes from 'prop-types';
import NoResult from '../../components/NoResult';

const Photos = ({ images, filterImages }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleInput = e => {
        setInputValue(e.target.value);
    };

    const handleSearchBtn = (e) => {
        e.preventDefault();
        filterImages(inputValue);
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
            <Grid col='4'>
                {!images.length 
                    ? <NoResult message='No results. Please, try again' /> 
                    : images.map(image =>
                        <Card key={image.id} url={image.url} title={image.title} col='4'/>
                    )}
            </Grid>
            {images.length > 10 && <Pagination activePage={1} pageNum={12} showedAmount={5} />}
        </>
    );
};

Photos.propTypes = {
    images: PropTypes.array.isRequired,
    filterImages: PropTypes.func.isRequired
}

export default Photos;