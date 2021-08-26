import React from 'react';
import { render } from '@testing-library/react';
import Photos from './Photos';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

it('should render the photo page', () => {
  const history = createMemoryHistory();
  const route = '/profile/1/photos';
  history.push(route);

  const { getByTestId } = render(
    <Router history={history}>
      <Photos />
    </Router>,
  );

  const photos = getByTestId('page-with-pagination');

  expect(photos).toBeInTheDocument();
});
