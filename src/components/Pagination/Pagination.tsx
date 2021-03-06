import React from 'react';
import Select from '../Select/Select';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PaginationElement from './PaginationElement/PaginationElement';
import { IconArrow, PaginationContainer } from './Pagination.styled';
import { getFilledArray } from '../../utils';
import {
  perPageOptionsAlbums,
  perPageOptionsPhotos,
} from '../../global/app-config-constants';
import { PaginationProps } from './Pagination.d';

const Pagination = ({
  activePage,
  pageNum,
  showedAmount,
  changeCurrentPage,
  changePerPageValue,
  handleLeftArrow,
  handleRightArrow,
  selectFor,
}: PaginationProps) => {
  const getElements: () => number[] = () => getFilledArray(pageNum - 1);

  const allPagesWithoutLast: number[] = getElements();

  const middleOfShowedPages: number = Math.floor(showedAmount / 2);
  const firstIndexShowedPage: number =
    activePage > middleOfShowedPages ? activePage - middleOfShowedPages : 0;
  const lastIndexShowedPage: number = firstIndexShowedPage + showedAmount;

  const getShowedPages: () => number[] = () => {
    const checkedPages: number[] = allPagesWithoutLast.slice(
      firstIndexShowedPage,
      lastIndexShowedPage,
    );
    return checkedPages.length < showedAmount
      ? allPagesWithoutLast.slice(-showedAmount + 1)
      : checkedPages;
  };

  const showedPages: number[] = getShowedPages();

  const isShowDots: boolean = !showedPages.includes(pageNum - 1);

  return (
    <PaginationContainer data-testid="pagination">
      {pageNum > 1 && (
        <>
          <IconArrow
            isDisable={activePage === 1}
            onClick={handleLeftArrow}
            data-testid="pagination-left-icon"
          >
            <ArrowBackIosIcon />
          </IconArrow>
          {showedPages.map((page: number) => (
            <PaginationElement
              key={page}
              page={page}
              isActive={page === activePage}
              handlePageNum={changeCurrentPage}
            />
          ))}
          {isShowDots && <span>...</span>}
          <PaginationElement
            key={pageNum}
            page={pageNum}
            isActive={pageNum === activePage}
            handlePageNum={changeCurrentPage}
          />
          <IconArrow
            isDisable={activePage === pageNum}
            onClick={handleRightArrow}
            data-testid="pagination-right-icon"
          >
            <ArrowForwardIosIcon />
          </IconArrow>
        </>
      )}
      <Select
        label="Per page"
        id="Page"
        options={
          selectFor === 'photos' ? perPageOptionsPhotos : perPageOptionsAlbums
        }
        handleSettingPerPageValue={changePerPageValue}
      />
    </PaginationContainer>
  );
};

export default Pagination;
