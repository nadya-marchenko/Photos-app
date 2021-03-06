import React, { useEffect } from 'react';
import Button from '../Button/Button';
import {
  AlbumCardWrapper,
  AlbumNameWrapper,
  BtnLabel,
  BtnWrapper,
} from './AlbumCard.styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import { API_URL } from '../../global/app-config-constants';
import { AlbumProps } from './AlbumCard.d';
import { Photos } from '../../pages/Photos/Photos.d';

const AlbumCard = ({ link, title, previewPhotosNum, albumId }: AlbumProps) => {
  const [previewPhotos, setPreviewPhotos] = React.useState<Photos[]>([]);

  useEffect(() => {
    axios
      .get<Photos[]>(`${API_URL}/albums/${albumId}/photos`)
      .then(({ data }) => setPreviewPhotos(data))
      .catch(({ data }) => checkErrorsFromAPI(data));
  }, [albumId]);

  return (
    <AlbumCardWrapper>
      <AlbumNameWrapper>
        <p>{title}</p>
      </AlbumNameWrapper>
      <section>
        {previewPhotos
          .slice(0, previewPhotosNum)
          .map(({ id, thumbnailUrl, title }: Photos) => (
            <img
              key={id}
              src={thumbnailUrl}
              alt={title}
              data-testid={`preview-photo-${id}`}
            />
          ))}
      </section>
      <BtnWrapper>
        <Button link={link} color="primary">
          <BtnLabel>See more</BtnLabel>
          <NavigateNextIcon />
        </Button>
      </BtnWrapper>
    </AlbumCardWrapper>
  );
};

export default AlbumCard;
