import React from 'react';
import { render } from '@testing-library/react';
import { perPageOptionsPhotos } from '../../global/app-config-constants';
import userEvent from '@testing-library/user-event';

import Select from './Select';

it('changes per page value', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Select
      label="Per page"
      id="Page"
      options={perPageOptionsPhotos}
      handleSettingPerPageValue={onChange}
    />,
  );

  userEvent.selectOptions(getByTestId('select-per-page'), ['24']);

  expect(onChange).toHaveBeenCalledTimes(1);

  expect(getByTestId('per-page-1').selected).toBe(true);
  expect(getByTestId('per-page-2').selected).toBe(false);
  expect(getByTestId('per-page-3').selected).toBe(false);
});
