import { PhotosConfig } from '../../pages/Photos/Photos';
export interface PhotosGridConfig {
  photos: PhotosConfig[];
  cardsPerPage: number;
  currentPage: number;
}
