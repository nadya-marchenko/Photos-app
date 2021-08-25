import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { colors } from '../../../global/colors';
import { hexToRgb } from '../../../test-utils';

import PaginationElement from './PaginationElement';

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

it('changes background of active page', () => {
  const onChange = jest.fn();
  act(() => {
    render(
      <PaginationElement page={2} isActive={true} handlePageNum={onChange} />,
      container,
    );
  });

  const pageLinkElement: HTMLElement | Element | null = document.querySelector(
    '[data-testid="pagination-el-id-active"]',
  );

  const style = window.getComputedStyle(pageLinkElement!);
  expect(style.backgroundColor).toBe(hexToRgb(colors.default, false));
});

it('without background if it is not active page', () => {
  const onChange = jest.fn();
  act(() => {
    render(
      <PaginationElement page={2} isActive={false} handlePageNum={onChange} />,
      container,
    );
  });

  const pageLinkElement: HTMLElement | Element | null = document.querySelector(
    '[data-testid="pagination-el-id"]',
  );

  const style = window.getComputedStyle(pageLinkElement!);

  expect(style.backgroundColor).toBe('');
});
