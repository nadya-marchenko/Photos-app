import PhotosGrid from '../../components/PhotosGrid/PhotosGrid';
import { API_URL } from '../../global/app-config-constants';
import { useParams } from 'react-router-dom';
import PageWithPagination from '../../components/PageWithPagination/PageWithPagination';

const Photos = () => {
  const { album } = useParams<Record<string, string | undefined>>();

  return (
    <PageWithPagination
      API_URI={`${API_URL}/albums/${album}/photos`}
      selectorFor="photos"
      grid={PhotosGrid}
      defaultNumPage={12}
    />
  );
};

export default Photos;
