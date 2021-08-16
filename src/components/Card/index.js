import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, TitleWrapper } from './Card.styled';

const Card = ({ url, title, col }) => 
    <CardWrapper col={col}>
        <img src={url} alt={title} />
        <TitleWrapper>
            <p>{title}</p>
        </TitleWrapper>
    </CardWrapper>;

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    col: PropTypes.string.isRequired
}

export default Card;