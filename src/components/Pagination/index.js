import React from 'react';
import Select from '../Select';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import PaginationElement from './PaginationElement';
import { IconArrow, PaginationContainer } from './Pagination.styled';
import { getFilledArray } from '../../utils';

const perPageVariants = [7, 10, 20, 30, 40, 60];

const Pagination = ({ activePage, pageNum, showedAmount, changeCurrentPage, changePerPageValue, handleLeftArrow, handleRightArrow }) => {
    const getElements = () => getFilledArray(pageNum - 1);

    const allPagesWithoutLast = getElements();

    const middleOfShowedPages = Math.floor(showedAmount / 2); 
    const firstIndexShowedPage = activePage > middleOfShowedPages 
        ?  activePage - middleOfShowedPages
        : 0;
    const lastIndexShowedPage = firstIndexShowedPage + showedAmount;

    const getShowedPages = () => {
        const checkedPages = allPagesWithoutLast.slice(firstIndexShowedPage, lastIndexShowedPage);
        return checkedPages.length < showedAmount
            ? allPagesWithoutLast.slice(-showedAmount + 1)
            : checkedPages;
    };

    const showedPages = getShowedPages();

    const isShowDots = !showedPages.includes(pageNum - 1);

    return(
        <PaginationContainer>
            {pageNum > 1 && <>
                <IconArrow isDisable={activePage === 1} onClick={handleLeftArrow}>
                    <ArrowBackIosIcon />
                </IconArrow>
                    {showedPages.map(page => 
                        <PaginationElement 
                            key={page} 
                            page={page} 
                            isActive={page === activePage}
                            handlePageNum={changeCurrentPage}
                        />
                    )}
                {isShowDots && <span>...</span>}
                <PaginationElement 
                            key={pageNum} 
                            page={pageNum} 
                            isActive={pageNum === activePage}
                            handlePageNum={changeCurrentPage}
                        />
                <IconArrow isDisable={activePage === pageNum} onClick={handleRightArrow}>
                    <ArrowForwardIosIcon />
                </IconArrow>
            </>}
            <Select
                label='Per page' 
                id='Page' 
                options={perPageVariants}
                handleSettingPerPageValue={changePerPageValue}
            />
        </PaginationContainer>
    );
}

Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    pageNum: PropTypes.number.isRequired,
    changeCurrentPage: PropTypes.func.isRequired,
    changePerPageValue: PropTypes.func.isRequired,
    handleLeftArrow: PropTypes.func.isRequired,
    handleRightArrow: PropTypes.func.isRequired
}

export default Pagination;