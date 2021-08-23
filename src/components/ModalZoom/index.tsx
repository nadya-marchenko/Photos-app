import React from 'react';
import {
  CloseBtn,
  ModalImg,
  ModalCaption,
  ModalWrapper,
} from './ModalZoom.styled';
import { ModalZoomConfig } from './ModalZoom';

const ModalZoom = ({ largeImg, title, handleCloseModal }: ModalZoomConfig) => (
  <ModalWrapper>
    <CloseBtn onClick={handleCloseModal}>&times;</CloseBtn>
    <ModalImg src={largeImg} alt={title} />
    <ModalCaption>{title}</ModalCaption>
  </ModalWrapper>
);

export default ModalZoom;
