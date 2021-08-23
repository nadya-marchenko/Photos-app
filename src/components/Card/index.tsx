import React from 'react';
import { CardWrapper, TitleWrapper } from './Card.styled';
import { CardConfig } from './Card';

const Card = ({ url, title, col, id, handleZoom }: CardConfig) => (
  <CardWrapper onClick={() => handleZoom(id)} col={col}>
    <img src={url} alt={title} />
    <TitleWrapper>
      <p>{title}</p>
    </TitleWrapper>
  </CardWrapper>
);

export default Card;
