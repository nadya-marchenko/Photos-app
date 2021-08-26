import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  it('should show card with image and title', () => {
    const { getByTestId } = render(
      <Card
        url="/test"
        title="test card"
        col={3}
        id={3}
        handleZoom={() => {}}
      />,
    );

    const card = getByTestId('photo-card');

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent('test card');
    expect(card.querySelector('img')).toHaveAccessibleName('test card');
  });
});
