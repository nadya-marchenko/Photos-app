import { ProfileDataProps } from '../../components/ProfileSection/ProfileSection.d';
import { PhotosProps } from '../../pages/Photos/Photos';
import { AlbumsProps } from '../../pages/Albums/Albums';

export interface WithLoadingProps {
  isLoading: boolean;
  photos?: PhotosProps[] | AlbumsProps[];
  cardsPerPage?: number;
  currentPage?: number;
  icon?: JSX.Element | JSX.Element[];
  title?: string;
  inputNames?: ProfileInputsProps[];
  col?: number;
  id?: number;
  profileData?: ProfileDataProps;
  defaultNumPage?: number;
}
