import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { AlbumCardWrapper, AlbumNameWrapper } from './AlbumCard.styled';
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
        <Button link={link} color='primary'>
            <span className='btn-text'>See more</span>
            <NavigateNextIcon style={{ verticalAlign: 'middle' }} />
        </Button>
    </AlbumCardWrapper>;

AlbumCard.propTypes = {
    previewPhotos: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default AlbumCard;