import { PhotosGridConfig } from '../PhotosGrid/PhotosGrid';
import { ProfileDataConfig } from '../../components/ProfileSection/ProfileSection.d';

export interface WithLoadingProps {
  isLoading: boolean;
  photos?: PhotosConfig[] | AlbumsConfig[];
  cardsPerPage?: number;
  currentPage?: number;
  icon?: JSX.Element | JSX.Element[];
  title?: string;
  inputNames?: ProfileInputsConfig[];
  col?: number;
  id?: number;
  profileData?: ProfileDataConfig;
  defaultNumPage?: number;
}
