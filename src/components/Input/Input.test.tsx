import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('<Input />', () => {
  it('Input shows', () => {
    const { getByTestId } = render(
      <Input type="text" id="my-test" defaultValue="my-test" label="test" />,
    );

    const input = getByTestId('my-test');

    expect(input).toHaveValue('my-test');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('Input changes', () => {
    const { getByTestId } = render(
      <Input type="text" id="my-test" defaultValue="my-test" label="test" />,
    );

    const input = getByTestId('my-test');
    userEvent.clear(input);
    userEvent.type(input, 'Good day');
    expect(input.value).toBe('Good day');
  });
});
