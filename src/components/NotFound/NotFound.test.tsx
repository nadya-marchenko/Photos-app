import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('NotFound shows icon and warning text', async () => {
    const { getByTestId } = render(<NotFound />);
    const notFound = getByTestId('not-found');
    const notFoundIcon = getByTestId('not-found-icon');

    expect(notFound).toHaveTextContent('Page Not Found');
    expect(notFound).toContainElement(notFoundIcon);
  });
});
