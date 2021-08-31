import React from 'react';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Profile, { ProfileSectionWithLoading } from './Profile';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { profileConfig } from './ProfileConfig';

Enzyme.configure({ adapter: new Adapter() });

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

    let wrapper;

    await act(async () => {
      wrapper = mount(
        <Router history={history}>
          <Profile />
        </Router>,
      );

      expect(wrapper.find(ProfileSectionWithLoading).length).toEqual(
        profileConfig.length,
      );
      expect(
        wrapper.find(ProfileSectionWithLoading).at(0).props().isLoading,
      ).toEqual(true);
      expect(
        wrapper.find(ProfileSectionWithLoading).at(0).props().profileData,
      ).toEqual(undefined);
    });

    wrapper.update();

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(
      wrapper.find(ProfileSectionWithLoading).at(0).props().isLoading,
    ).toEqual(false);

    expect(
      wrapper.find(ProfileSectionWithLoading).at(0).props().profileData,
    ).toEqual(fakeProfileData);
  });
});
