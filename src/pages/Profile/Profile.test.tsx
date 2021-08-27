import React from 'react';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile from './Profile';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

const fakeProfileData = [
  {
    id: 1,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
];

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve<any>({ data: fakeProfileData }));
});

afterEach(cleanup);

describe('<Profile />', () => {
  it('should render the profile page', async () => {
    const history = createMemoryHistory();
    const route = '/profile/1/user';
    history.push(route);

    await act(async () => {
      const { getByTestId } = render(
        <Router history={history}>
          <Profile />
        </Router>,
      );

      const profilePage = getByTestId('profile-page');

      expect(profilePage.querySelector('h1')).toHaveTextContent('Your profile');
    });
  });

  it('should render profile page with fake data', async () => {
    await act(async () => {
      const history = createMemoryHistory();
      const route = '/profile/1/user';
      history.push(route);
      const { getByTestId } = render(
        <Router history={history}>
          <Profile />
        </Router>,
      );

      await waitFor(() => getByTestId('username'));

      screen.debug();

      expect(getByTestId('username')).toHaveValue('Samantha');
    });
  });
});
