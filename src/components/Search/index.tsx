import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import SearchIcon from '@material-ui/icons/Search';
import { SearchRow } from './Search.styled';
import { SearchConfig } from './Search';

const Search = ({ filterImages }: SearchConfig) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInputValue(e.target.value);

  const handleSearchBtn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    filterImages(inputValue);
  };

  return (
    <SearchRow onSubmit={handleSearchBtn}>
      <Input
        type="search"
        label="Search by title"
        id="search"
        icon={<SearchIcon />}
        value={inputValue}
        onChangeHandler={handleInput}
      />
      <Button type="submit" color="default">
        Search
      </Button>
    </SearchRow>
  );
};

export default Search;
