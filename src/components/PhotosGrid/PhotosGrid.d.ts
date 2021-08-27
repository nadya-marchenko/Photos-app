import { AlbumsProps } from '../../pages/Albums/Albums';
import { PhotosProps } from '../../pages/Photos/Photos';
export interface PhotosGridProps {
  photos: PhotosProps[] | AlbumsProps[];
  cardsPerPage: number;
  currentPage: number;
}
