import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AlbumCard from './AlbumCard';

let container: HTMLElement | HTMLImageElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container!);
  container?.remove();
  container = null;
});

it("renders user data", async () => {
  const fakePreviewPhoto = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
  ];
  jest.spyOn(global, "fetch").mockImplementation((): Promise<any> =>
    Promise.resolve({
      json: () => Promise.resolve(fakePreviewPhoto)
    })
  );

  await act(async () => {
    render(<AlbumCard link='test' title='Test link' previewPhotosNum={3} albumId={1} />, container);
  });
// I'm in process of fixing this tests
console.log('container', container?.querySelectorAll('img')?.length);

  expect((container?.querySelector("img"))?.src).toBe(fakePreviewPhoto[0].url);
  expect((container?.querySelector('[data-testid="preview-photo-2"]') as HTMLImageElement)?.src).toBe(fakePreviewPhoto[1].url);
  expect((container?.querySelector('[data-testid="preview-photo-3"]') as HTMLImageElement)?.src).toBe(fakePreviewPhoto[2].url);

  (global.fetch as jest.Mock).mockRestore();
}); 
