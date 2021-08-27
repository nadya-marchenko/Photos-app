import React from 'react';
import { ElementWrapper } from './PaginationElement.styled';
import { PaginationElementProps } from './PaginationElement.d';

const PaginationElement = ({
  page,
  isActive,
  handlePageNum,
}: PaginationElementProps) => (
  <ElementWrapper
    isActive={isActive}
    onClick={() => handlePageNum(page)}
    data-testid={isActive ? `pagination-el-id-active` : `pagination-el-id`}
  >
    {page}
  </ElementWrapper>
);

export default PaginationElement;
