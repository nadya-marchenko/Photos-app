import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import SearchIcon from '@material-ui/icons/Search';
import { SearchRow } from './Search.styled';

const Search = ({ filterImages }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = e => setInputValue(e.target.value);

    const handleSearchBtn = (e) => {
        e.preventDefault();
        filterImages(inputValue);
    };

    return (
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
    );
};

Search.propTypes = {
    filterImages: PropTypes.func.isRequired,
};

export default Search;