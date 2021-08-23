import React, { useEffect } from 'react';
import { PageHeadline, PhotoHeadContainer } from './Albums.styled';
import Pagination from '../../components/Pagination';
import NoResult from '../../components/NoResult';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import Search from '../../components/Search';
import WithLoading from '../../components/WithLoading';
import AlbumsGrid from '../../components/AlbumsGrid';
import { API_URL } from '../../global/app-config-constants';
import { AlbumsConfig } from './Albums';
import { useParams } from 'react-router-dom';

const AlbumsGridWithLoading = WithLoading(AlbumsGrid);

const Albums = () => {
  const { user } = useParams<Record<string, string | undefined>>();

  const API_URL_ALBUMS = `${API_URL}/users/${user}/albums`;

  const [photos, setPhotos] = React.useState<AlbumsConfig[]>([]);
  const [filteredValue, setFilteredValue] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cardsPerPage, setCardsPerPage] = React.useState<number>(6);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const pageNum: number = Math.ceil(photos.length / cardsPerPage);

  const filterImages = (newFilteredValue: React.SetStateAction<string>) =>
    setFilteredValue(newFilteredValue);

  const getFilteredPhotos = (photos: AlbumsConfig[], filteredValue: string) =>
    photos.filter(({ title }) => title.includes(filteredValue));

  useEffect(() => {
    axios
      .get<AlbumsConfig[]>(API_URL_ALBUMS)
      .then(({ data }) => setPhotos(getFilteredPhotos(data, filteredValue)))
      .catch(({ data }) => {
        setIsError(true);
        checkErrorsFromAPI(data);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  }, [API_URL_ALBUMS, filteredValue]);

  const changeCurrentPage = (newCurrentPage: React.SetStateAction<number>) => {
    setIsLoading(true);
    !(newCurrentPage < 1 || newCurrentPage > pageNum) &&
      setCurrentPage(newCurrentPage);
    setIsLoading(false);
  };

  const changePerPageValue = (
    newPerPageValue: React.SetStateAction<number>,
  ) => {
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
      {isError ? (
        <NoResult message="Problems with API. Please try again" />
      ) : (
        <AlbumsGridWithLoading
          isLoading={isLoading}
          photos={photos}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
        />
      )}
      <Pagination
        activePage={currentPage}
        pageNum={pageNum}
        showedAmount={5}
        changeCurrentPage={changeCurrentPage}
        changePerPageValue={changePerPageValue}
        handleLeftArrow={() => changeCurrentPage(currentPage - 1)}
        handleRightArrow={() => changeCurrentPage(currentPage + 1)}
        selectFor="albums"
      />
    </>
  );
};

export default Albums;
