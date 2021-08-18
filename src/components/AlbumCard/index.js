import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { AlbumCardWrapper, AlbumNameWrapper, BtnLabel, BtnWrapper } from './AlbumCard.styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';
import { checkErrorsFromAPI } from '../../utils';
import { API_URL } from '../../global/app-config-constants';

const AlbumCard = ({ link, title, previewPhotosNum, albumId }) => {
    const [ previewPhotos, setPreviewPhotos ] = useState([]);

    useEffect(() => {
        const getPreviewPhotos = () => {
            axios.get(`${API_URL}/albums/${albumId}/photos`)
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
}

export default AlbumCard;