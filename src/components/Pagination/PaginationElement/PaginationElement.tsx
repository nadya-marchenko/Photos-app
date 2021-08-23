import React from 'react';
import { ElementWrapper } from './PaginationElement.styled';
import { PaginationElementConfig } from './PaginationElement.d';

const PaginationElement = ({
  page,
  isActive,
  handlePageNum,
}: PaginationElementConfig) => (
  <ElementWrapper
    isActive={isActive}
    onClick={() => handlePageNum(page)}
    data-testid={isActive ? `pagination-el-id-active` : `pagination-el-id`}
  >
    {page}
  </ElementWrapper>
);

export default PaginationElement;
