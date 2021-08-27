import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

describe('<Grid />', () => {
  it('Grid shows inner HTML elements', async () => {
    const { getByTestId } = render(
      <Grid col={3}>
        <div>test 1</div>
      </Grid>,
    );
    const grid = getByTestId('grid');

    expect(grid).toBeInTheDocument();
    expect(grid).toHaveTextContent('test 1');
  });
});
