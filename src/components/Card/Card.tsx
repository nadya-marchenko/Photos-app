import React from 'react';
import { CardWrapper, TitleWrapper } from './Card.styled';
import { CardProps } from './Card.d';

const Card = ({ url, title, col, id, handleZoom }: CardProps) => (
  <CardWrapper
    onClick={() => handleZoom(id)}
    col={col}
    data-testid="photo-card"
  >
    <img src={url} alt={title} />
    <TitleWrapper>
      <p>{title}</p>
    </TitleWrapper>
  </CardWrapper>
);

export default Card;
