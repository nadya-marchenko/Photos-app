import React from 'react';
import { act, render } from '@testing-library/react';
import PageWithPagination from './PageWithPagination';
import PhotosGrid from '../PhotosGrid/PhotosGrid';
import { API_URL } from '../../global/app-config-constants';

describe('<PageWithPagination />', () => {
  it('should display title, grid, search and pagination', () => {
    act(() => {
      const { getByTestId } = render(
        <PageWithPagination
          API_URI={`${API_URL}/albums/1/photos`}
          selectorFor="photos"
          grid={PhotosGrid}
          defaultNumPage={12}
        />,
      );
      const pageWithPagination = getByTestId('page-with-pagination');
      const pagination = getByTestId('pagination');
      const grid = getByTestId('grid');
      const search = getByTestId('search-form');

      expect(pageWithPagination).toBeInTheDocument();
      expect(pageWithPagination.querySelector('h1')).toHaveTextContent(
        'Your photos',
      );
      expect(pageWithPagination).toContainElement(search);
      expect(pageWithPagination).toContainElement(grid);
      expect(pageWithPagination).toContainElement(pagination);
    });
  });
});
