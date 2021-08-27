import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile from './Profile';

it('should render the profile page', () => {
  const history = createMemoryHistory();
  const route = '/profile/1/user';
  history.push(route);

  const { getByTestId } = render(
    <Router history={history}>
      <Profile />
    </Router>,
  );

  const profilePage = getByTestId('profile-page');

  expect(profilePage.querySelector('h1')).toHaveTextContent('Your profile');
});
