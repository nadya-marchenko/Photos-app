import { AlbumsProps } from '../../pages/Albums/Albums';
import { PhotosProps } from '../../pages/Photos/Photos';

export interface AlbumGridProps {
  photos: AlbumsProps[] | PhotosProps[];
  cardsPerPage: number;
  currentPage: number;
}
