import React from 'react';
import { act, render } from '@testing-library/react';
import AlbumsGrid from './AlbumGrid';

describe('<AlbumsGrid />', () => {
  it('should display error message and not to display albums if there are no albums', () => {
    act(() => {
      const { getByTestId } = render(
        <AlbumsGrid photos={[]} cardsPerPage={12} currentPage={1} />,
      );
      const grid = getByTestId('grid');

      expect(grid).toBeInTheDocument();
      expect(grid).toHaveTextContent('No results. Please, try again');
    });
  });
});
