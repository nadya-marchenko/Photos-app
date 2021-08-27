import React from 'react';
import { render } from '@testing-library/react';

import ProfileSection from './ProfileSection';

const fakeProfileData = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const renderProfileSection = () => {
  const defaultProps = {
    icon: <div />,
    title: 'test',
    inputNames: [{ name: 'Name', apiName: 'name', type: 'text', id: '1' }],
    col: 2,
    profileData: fakeProfileData,
  };
  return render(<ProfileSection {...defaultProps} />);
};

describe('<ProfileSection />', () => {
  it('should display profile form', async () => {
    const { findByTestId } = renderProfileSection();

    const profileForm = await findByTestId('profileSection');

    expect(profileForm).toHaveFormValues({
      name: 'Leanne Graham',
    });
  });
});
