import React, { useEffect } from 'react';
import { PageHeadline, PhotoHeadContainer } from './Photos.styled';
import Pagination from '../../components/Pagination/Pagination';
import NoResult from '../../components/NoResult/NoResult';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import Search from '../../components/Search/Search';
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid';
import WithLoading from '../../components/WithLoading/WithLoading';
import { API_URL } from '../../global/app-config-constants';
import { useParams } from 'react-router-dom';
import { PhotosConfig } from './Photos.d';

const PhotosGridWithLoading = WithLoading(PhotosGrid);

const Photos = () => {
  const { album } = useParams<Record<string, string | undefined>>();

  const [photos, setPhotos] = React.useState<PhotosConfig[]>([]);
  const [filteredValue, setFilteredValue] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cardsPerPage, setCardsPerPage] = React.useState<number>(12);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const pageNum: number = Math.ceil(photos.length / cardsPerPage);

  const filterImages = (newFilteredValue: React.SetStateAction<string>) =>
    setFilteredValue(newFilteredValue);

  const getFilteredPhotos = (photos: PhotosConfig[], filteredValue: string) =>
    photos.filter((photoEl) => photoEl.title.includes(filteredValue));

  useEffect(() => {
    axios
      .get<PhotosConfig[]>(`${API_URL}/albums/${album}/photos`)
      .then(({ data }) => setPhotos(getFilteredPhotos(data, filteredValue)))
      .catch(({ data }) => {
        setIsError(true);
        checkErrorsFromAPI(data);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  }, [album, filteredValue]);

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
        <PageHeadline>Your photos</PageHeadline>
        <Search filterImages={filterImages} />
      </PhotoHeadContainer>
      {isError ? (
        <NoResult message="Problems with API. Please try again" />
      ) : (
        <PhotosGridWithLoading
          isLoading={isLoading}
          photos={photos}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
        />
      )}
      {photos.length > 10 && (
        <Pagination
          activePage={currentPage}
          pageNum={pageNum}
          showedAmount={5}
          changeCurrentPage={changeCurrentPage}
          changePerPageValue={changePerPageValue}
          handleLeftArrow={() => changeCurrentPage(currentPage - 1)}
          handleRightArrow={() => changeCurrentPage(currentPage + 1)}
          selectFor="photos"
        />
      )}
    </>
  );
};

export default Photos;
