import axios from 'axios';
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AlbumCard from './AlbumCard';

const fakePreviewPhoto = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
];

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({ data: fakePreviewPhoto }));
});

afterEach(cleanup);

it('renders preview photos in album card', async () => {
  await act(async () => {
    const { getByAltText } = render(
      <AlbumCard
        link="test"
        title="Test link"
        previewPhotosNum={3}
        albumId={1}
      />,
    );
    await waitFor(() => getByAltText(fakePreviewPhoto[0].title));
    getByAltText(fakePreviewPhoto[1].title);
    getByAltText(fakePreviewPhoto[2].title);

    expect(
      getByAltText('reprehenderit est deserunt velit ipsam'),
    ).toHaveAttribute('src', 'https://via.placeholder.com/150/771796');
  });
});
