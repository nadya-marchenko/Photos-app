import AlbumsGrid from '../../components/AlbumGrid/AlbumGrid';
import { API_URL } from '../../global/app-config-constants';
import { useParams } from 'react-router-dom';
import PageWithPagination from '../../components/PageWithPagination/PageWithPagination';

const Albums = () => {
  const { user } = useParams<Record<string, string | undefined>>();

  return (
    <PageWithPagination
      API_URI={`${API_URL}/users/${user}/albums`}
      selectorFor="albums"
      grid={AlbumsGrid}
      defaultNumPage={6}
    />
  );
};

export default Albums;
