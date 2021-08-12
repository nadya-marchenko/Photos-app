import React from 'react';
import { ElementWrapper } from './PaginationElement.styled';

const PaginationElement = ({ page, isActive }) => 
    <ElementWrapper isActive={isActive} >{page}</ElementWrapper>;

export default PaginationElement;