import React from 'react';
import { act, render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import Routes from './Routes';

import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createMemoryHistory } from 'history';

Enzyme.configure({ adapter: new Adapter() });

describe('<Routes>', () => {
  it('should render albums page', async () => {
    const history = createMemoryHistory();
    const route = '/profile/1/albums';
    history.push(route);

    let wrapper;

    await act(async () => {
      wrapper = mount(
        <Router history={history}>
          <Routes />
        </Router>,
      );

      expect(wrapper.find('h1').at(0).props().children).toEqual('Your albums');
    });
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
