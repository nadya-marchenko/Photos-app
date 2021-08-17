import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { AlbumCardWrapper, AlbumNameWrapper, BtnLabel, BtnWrapper } from './AlbumCard.styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';

const AlbumCard = ({ link, title, previewPhotosNum, albumId, apiUrl }) => {
    const [ previewPhotos, setPreviewPhotos ] = useState([]);

    useEffect(() => {
        const getPreviewPhotos = () => {
            axios.get(`${apiUrl}/albums/${albumId}/photos`)
                .then(({ data }) => setPreviewPhotos(data))
                .catch(() => checkErrorsFromAPI())
        };
        getPreviewPhotos();
    }, [albumId, apiUrl]);

    return (
        <AlbumCardWrapper>
            <AlbumNameWrapper>
                <p>{title}</p>
            </AlbumNameWrapper>
            <section>
                {previewPhotos.slice(0, previewPhotosNum).map(({ id, thumbnailUrl, title }) => 
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

AlbumCard.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    previewPhotosNum: PropTypes.number.isRequired,
    albumId: PropTypes.number.isRequired,
    apiUrl: PropTypes.string.isRequired,
}

export default AlbumCard;