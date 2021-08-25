import React from 'react';
import {
  CloseBtn,
  ModalImg,
  ModalCaption,
  ModalWrapper,
} from './ModalZoom.styled';
import { ModalZoomProps } from './ModalZoom.d';

const ModalZoom = ({ largeImg, title, handleCloseModal }: ModalZoomProps) => (
  <ModalWrapper>
    <CloseBtn onClick={handleCloseModal}>&times;</CloseBtn>
    <ModalImg src={largeImg} alt={title} />
    <ModalCaption>{title}</ModalCaption>
  </ModalWrapper>
);

export default ModalZoom;
