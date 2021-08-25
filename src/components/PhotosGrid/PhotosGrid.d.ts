import { AlbumsConfig } from '../../pages/Albums/Albums';
import { PhotosConfig } from '../../pages/Photos/Photos';
export interface PhotosGridConfig {
  photos: PhotosConfig[] | AlbumsConfig[];
  cardsPerPage: number;
  currentPage: number;
}
