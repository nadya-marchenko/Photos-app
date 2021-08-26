import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './Routes';

describe('<Routes>', () => {
  it('should render albums page', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/profile/1/albums']}>
        <Routes />
      </MemoryRouter>,
    );

    const app = getByTestId('page-with-pagination');

    expect(app.querySelector('h1')).toHaveTextContent('Your albums');
  });

  it('should render notfound page', () => {
    render(
      <MemoryRouter initialEntries={['/hej']}>
        <Routes />
      </MemoryRouter>,
    );

    const app = document.body;

    expect(app.querySelector('h1')).toHaveTextContent('Page Not Found');
  });
});
