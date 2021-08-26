import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('<NavBar />', () => {
  it('NavBar shows logo, main navigation', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const navBar = getByRole('banner');

    expect(navBar).toBeInTheDocument();
    expect(getByRole('link', { name: /photos app/i })).toHaveTextContent(
      'Photos App',
    );
    expect(navBar.querySelectorAll('li').length).toBeGreaterThan(1);
  });
});
