import React, { useState } from 'react';
import Select from '../Select';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import PaginationElement from './PaginationElement';
import { IconArrow, LastElement, PaginationContainer } from './Pagination.styled';

const Pagination = ({ activePage, pageNum, showedAmount }) => {
    const getElements = () => {
        const lastShowedPage = showedAmount > pageNum ? pageNum  : showedAmount;
        const newShowedPages = [];
        for(let i = activePage; i <= lastShowedPage; i++) {
            newShowedPages.push(i);
        }
        return newShowedPages;
    }

    const [showedPages, setShowedPages] = useState(getElements());
    const [isHoverLeftArrow, setIsHoverLeftArrow] = useState(false);
    const [isHoverRightArrow, setIsHoverRightArrow] = useState(false);

    return(
        <PaginationContainer>
            <IconArrow 
                onMouseOver={() => setIsHoverLeftArrow(!isHoverLeftArrow)}
                onMouseOut={() => setIsHoverLeftArrow(!isHoverLeftArrow)} >
                {isHoverLeftArrow ? <ArrowBackIosIcon style={{ fontSize: 12 }} color="disabled" /> 
                    : <ArrowBackIosIcon style={{ fontSize: 12 }} color="action" /> }
            </IconArrow>
                {showedPages.map(page => 
                    <PaginationElement key={page} page={page} isActive={page === activePage} />
                )}
            <span>...</span>
            <LastElement>{pageNum}</LastElement>
            <IconArrow 
                onMouseOver={() => setIsHoverRightArrow(!isHoverRightArrow)}
                onMouseOut={() => setIsHoverRightArrow(!isHoverRightArrow)} >
                {isHoverRightArrow ? <ArrowForwardIosIcon style={{ fontSize: 12 }} color="action" />
                    : <ArrowForwardIosIcon style={{ fontSize: 12 }} /> }
            </IconArrow>
            <Select label='Per page' id='Page' options={[10, 20, 30, 40]} />
        </PaginationContainer>
    );
}

Pagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    pageNum: PropTypes.number.isRequired
}

export default Pagination;