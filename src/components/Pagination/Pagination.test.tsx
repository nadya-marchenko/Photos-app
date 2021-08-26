import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';
import { colors } from '../../global/colors';

describe('<Pagination />', () => {
  it('should show Pagination, navigation arrows, selector per page', () => {
    const { getByTestId } = render(
      <Pagination
        activePage={2}
        pageNum={10}
        showedAmount={5}
        changeCurrentPage={() => {}}
        changePerPageValue={() => {}}
        handleLeftArrow={() => {}}
        handleRightArrow={() => {}}
        selectFor="photos"
      />,
    );

    const pagination = getByTestId('pagination');
    const paginationLeftArrow = getByTestId('pagination-left-icon');
    const paginationRightArrow = getByTestId('pagination-right-icon');
    const selectorPerPage = getByTestId('select-per-page');

    expect(pagination).toContainElement(paginationLeftArrow);
    expect(pagination).toContainElement(paginationRightArrow);
    expect(pagination).toContainElement(selectorPerPage);
  });

  it('should disable left arrow if the first page is current page, right arrow should be clickable', () => {
    const { getByTestId } = render(
      <Pagination
        activePage={1}
        pageNum={10}
        showedAmount={5}
        changeCurrentPage={() => {}}
        changePerPageValue={() => {}}
        handleLeftArrow={() => {}}
        handleRightArrow={() => {}}
        selectFor="photos"
      />,
    );

    const paginationLeftArrow = getByTestId('pagination-left-icon');
    const paginationRightArrow = getByTestId('pagination-right-icon');

    expect(paginationLeftArrow.querySelector('.MuiSvgIcon-root')).toHaveStyle(
      `color: ${colors.default}`,
    );
    expect(paginationRightArrow.querySelector('.MuiSvgIcon-root')).toHaveStyle(
      `color: ${colors.black}`,
    );
  });

  it('should disable right arrow if the last page is current page, left arrow should be clickable', () => {
    const { getByTestId } = render(
      <Pagination
        activePage={10}
        pageNum={10}
        showedAmount={5}
        changeCurrentPage={() => {}}
        changePerPageValue={() => {}}
        handleLeftArrow={() => {}}
        handleRightArrow={() => {}}
        selectFor="photos"
      />,
    );

    const paginationLeftArrow = getByTestId('pagination-left-icon');
    const paginationRightArrow = getByTestId('pagination-right-icon');

    expect(paginationLeftArrow.querySelector('.MuiSvgIcon-root')).toHaveStyle(
      `color: ${colors.black}`,
    );
    expect(paginationRightArrow.querySelector('.MuiSvgIcon-root')).toHaveStyle(
      `color: ${colors.default}`,
    );
  });
});
