import { AlbumGridProps } from '../AlbumGrid/AlbumGrid';
import { PhotosGridProps } from '../PhotosGrid/PhotosGrid';

export interface PageWithPaginationProps {
  API_URI: string;
  selectorFor: 'photos' | 'albums';
  grid: PhotosGridProps | AlbumGridProps;
  defaultNumPage: number;
}
