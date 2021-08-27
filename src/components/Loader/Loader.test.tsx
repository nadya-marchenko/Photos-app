import React from 'react';
import { render } from '@testing-library/react';

import Loader from './Loader';

it('loading shows', () => {
  const { getByTestId } = render(<Loader />);

  const loadingSection = getByTestId('loading');
  const loadingIcon = getByTestId('loading-icon');

  expect(loadingSection).toHaveTextContent('Loading...');
  expect(loadingSection).toContainElement(loadingIcon);
});
