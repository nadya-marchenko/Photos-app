import React from 'react';
import { ElementWrapper } from './PaginationElement.styled';
import { PaginationElementConfig } from './PaginationElement';

const PaginationElement = ({ page, isActive, handlePageNum }: PaginationElementConfig) =>
    <ElementWrapper isActive={isActive} onClick={() => handlePageNum(page)} >
        {page}
    </ElementWrapper>;

export default PaginationElement;