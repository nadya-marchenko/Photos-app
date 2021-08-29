import React, { useEffect } from 'react';
import { PageHeadline, PhotoHeadContainer } from './PageWithPagination.styled';
import Pagination from '../../components/Pagination/Pagination';
import NoResult from '../../components/NoResult/NoResult';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import Search from '../../components/Search/Search';
import WithLoading from '../../components/WithLoading/WithLoading';
import { PageWithPaginationProps } from './PageWithPagination.d';
import { Photos } from '../../pages/Photos/Photos.d';
import { Albums } from '../../pages/Albums/Albums.d';

const PageWithPagination = ({
  API_URI,
  selectorFor,
  grid,
  defaultNumPage,
}: PageWithPaginationProps) => {
  const GridWithLoading = WithLoading(grid);

  const [photos, setPhotos] = React.useState<Photos[] | Albums[]>([]);
  const [filteredValue, setFilteredValue] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [cardsPerPage, setCardsPerPage] =
    React.useState<number>(defaultNumPage);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const pageNum: number = Math.ceil(photos.length / cardsPerPage);

  const filterImages = (newFilteredValue: React.SetStateAction<string>) =>
    setFilteredValue(newFilteredValue);

  const getFilteredPhotos = (photos: Photos[], filteredValue: string) =>
    photos.filter((photoEl) => photoEl.title.includes(filteredValue));

  useEffect(() => {
    axios
      .get(API_URI)
      .then(({ data }) => setPhotos(getFilteredPhotos(data, filteredValue)))
      .catch(({ data }) => {
        setIsError(true);
        checkErrorsFromAPI(data);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(true);
  }, [API_URI, filteredValue]);

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
    <div data-testid="page-with-pagination">
      <PhotoHeadContainer>
        <PageHeadline>{`Your ${selectorFor}`}</PageHeadline>
        <Search filterImages={filterImages} />
      </PhotoHeadContainer>
      {isError ? (
        <NoResult message="Problems with API. Please try again" />
      ) : (
        <GridWithLoading
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
        selectFor={selectorFor}
      />
    </div>
  );
};

export default PageWithPagination;
