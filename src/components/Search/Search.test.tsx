import React from 'react';
import { fireEvent, render, waitFor } from "@testing-library/react";

import Search from './Search';
import { SearchConfig } from './Search.d';

const renderSearchForm = (props: JSX.IntrinsicAttributes & SearchConfig) => {
  const defaultProps = {
    filterImages() {
      return;
    },
  };
  return render(<Search {...defaultProps} {...props} />);
};

describe("<Search />", () => {
  it('should display search form', async () => {
    const onFilterImages = jest.fn();
    const { findByTestId } = render(<Search filterImages={onFilterImages} />);

    const searchForm = await findByTestId('search-form');

    expect(searchForm).toHaveFormValues({
      search: '',
    });
  });

//   it('should allow entering searching request', async () => {
//     const filterImages = jest.fn();
//     const { findByTestId } = renderSearchForm({ filterImages });
//     const searchInput = await findByTestId('search');

//     fireEvent.change(searchInput, { target: { value: "test" } });

//     expect(filterImages).toHaveBeenCalledWith("test");
//   })
});