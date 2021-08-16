import React from 'react';
import { ElementWrapper } from './PaginationElement.styled';
import PropTypes from 'prop-types';

const PaginationElement = ({ page, isActive, handlePageNum }) =>
    <ElementWrapper isActive={isActive} onClick={() => handlePageNum(page)} >
        {page}
    </ElementWrapper>;

PaginationElement.propTypes = {
    page: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    handlePageNum: PropTypes.func.isRequired
}

export default PaginationElement;