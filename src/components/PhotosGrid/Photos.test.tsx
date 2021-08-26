import React from 'react';
import { act, render } from '@testing-library/react';
import PhotosGrid from './PhotosGrid';

describe('<PhotosGrid />', () => {
  it('should display error message and not to display photos if there are no photos', () => {
    act(() => {
      const { getByTestId } = render(
        <PhotosGrid photos={[]} cardsPerPage={12} currentPage={1} />,
      );
      const grid = getByTestId('grid');

      expect(grid).toBeInTheDocument();
      expect(grid).toHaveTextContent('No results. Please, try again');
    });
  });
});
