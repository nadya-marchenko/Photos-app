import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import NoResult from './NoResult';

let container: HTMLElement | Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container!);
  container?.remove();
  container = null;
});

it('renders No result message', () => {
  act(() => {
    render(<NoResult message='Problems with api' />, container);
  });
  expect(container?.textContent).toBe('Problems with api')
});