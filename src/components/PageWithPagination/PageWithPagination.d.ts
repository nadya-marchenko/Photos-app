import { AlbumGridValues } from '../AlbumGrid/AlbumGrid';

export interface PageWithPaginationParams {
  API_URI: string;
  selectorFor: 'photos' | 'albums';
  grid: PhotosGridConfig | AlbumGridValues;
  defaultNumPage: number;
}
