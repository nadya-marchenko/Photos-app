import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { AlbumCardWrapper, AlbumNameWrapper, BtnLabel, BtnWrapper } from './AlbumCard.styled';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const AlbumCard = ({ previewPhotos, link, title }) => 
    <AlbumCardWrapper>
        <AlbumNameWrapper>
            <p>{title}</p>
        </AlbumNameWrapper>
        <section>
            {previewPhotos.map((src) => 
                <img src={src} alt={title} />
            )} 
        </section>
        <BtnWrapper>
            <Button link={link} color='primary'>
                <BtnLabel>See more</BtnLabel>
                <NavigateNextIcon />
            </Button>
        </BtnWrapper>
    </AlbumCardWrapper>;

AlbumCard.propTypes = {
    previewPhotos: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default AlbumCard;