import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Albums from './Albums';

it('should render the albums page', () => {
  const history = createMemoryHistory();
  const route = '/profile/1/albums';
  history.push(route);

  const { getByTestId } = render(
    <Router history={history}>
      <Albums />
    </Router>,
  );

  const albums = getByTestId('page-with-pagination');

  expect(albums).toBeInTheDocument();
});
