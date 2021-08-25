import React from 'react';
import { render } from '@testing-library/react';
import NavItem from './NavItem';
import { BrowserRouter } from 'react-router-dom';

describe('<NavItem />', () => {
  it('NavItem shows', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NavItem label="Test" link="/test" />
      </BrowserRouter>,
    );
    const navItem = getByTestId('nav-item');

    expect(navItem).toHaveTextContent('Test');
  });
});
