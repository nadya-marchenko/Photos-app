import React, { useEffect } from 'react';
import Button from '../Button';
import { AlbumCardWrapper, AlbumNameWrapper, BtnLabel, BtnWrapper } from './AlbumCard.styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import { API_URL } from '../../global/app-config-constants';
import { AlbumValues, PreviewPhotosConfig } from './AlbumCard';

const AlbumCard = ({ link, title, previewPhotosNum, albumId } : AlbumValues) => {
    const [ previewPhotos, setPreviewPhotos ] = React.useState<PreviewPhotosConfig[]>([]);

    useEffect(() => {
        const getPreviewPhotos = () => {
            axios.get<PreviewPhotosConfig[]>(`${API_URL}/albums/${albumId}/photos`)
                .then(({ data }) => setPreviewPhotos(data))
                .catch(() => checkErrorsFromAPI())
        };
        getPreviewPhotos();
    }, [albumId]);

    return (
        <AlbumCardWrapper>
            <AlbumNameWrapper>
                <p>{title}</p>
            </AlbumNameWrapper>
            <section>
                {previewPhotos.slice(0, previewPhotosNum).map(({ id, thumbnailUrl, title } : PreviewPhotosConfig) => 
                    <img key={id} src={thumbnailUrl} alt={title} />
                )} 
            </section>
            <BtnWrapper>
                <Button link={link} color='primary'>
                    <BtnLabel>See more</BtnLabel>
                    <NavigateNextIcon />
                </Button>
            </BtnWrapper>
        </AlbumCardWrapper>
    );
};

export default AlbumCard;