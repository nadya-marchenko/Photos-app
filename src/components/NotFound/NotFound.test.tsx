import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NotFound from './NotFound';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders page not found", () => {
  act(() => {
    render(<NotFound />, container);
  });
  expect(container.textContent).toBe("Page Not Found");
});