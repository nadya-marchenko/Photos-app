import { AlbumsConfig } from '../../pages/Albums/Albums';
import { PhotosConfig } from '../../pages/Photos/Photos';

export interface AlbumGridValues {
  photos: AlbumsConfig[] | PhotosConfig[];
  cardsPerPage: number;
  currentPage: number;
}
