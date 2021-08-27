import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('Button shows', () => {
    const { getByTestId } = render(<Button>test</Button>);
    const btn = getByTestId('test');

    expect(btn).toBeInTheDocument();
  });

  it('Button have type', () => {
    const { getByTestId } = render(<Button type="submit">test</Button>);
    const btn = getByTestId('test');

    expect(btn).toHaveAttribute('type', 'submit');
  });
});
