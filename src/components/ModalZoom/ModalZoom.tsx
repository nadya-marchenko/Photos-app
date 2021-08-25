import React from 'react';
import {
  CloseBtn,
  ModalImg,
  ModalCaption,
  ModalWrapper,
} from './ModalZoom.styled';
import { ModalZoomProps } from './ModalZoom.d';

const ModalZoom = ({ largeImg, title, handleCloseModal }: ModalZoomProps) => (
  <ModalWrapper data-testid="modal-zoom">
    <CloseBtn onClick={handleCloseModal} data-testid="modal-zoom-btn">&times;</CloseBtn>
    <ModalImg src={largeImg} alt={title} />
    <ModalCaption>{title}</ModalCaption>
  </ModalWrapper>
);

export default ModalZoom;
