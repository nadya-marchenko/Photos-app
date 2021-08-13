import React from 'react';
import PropTypes from 'prop-types';
import { CloseBtn, ModalImg, ModalCaption, ModalWrapper } from './ModalZoom.styled';

const ModalZoom = ({ largeImg, title, handleCloseModal }) => 
    <ModalWrapper>
        <CloseBtn 
            onClick={handleCloseModal}
        >
            &times;
        </CloseBtn>
        <ModalImg src={largeImg} alt={title} />
        <ModalCaption>{title}</ModalCaption>
    </ModalWrapper>;

ModalZoom.propType = {
    largeImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired
}

export default ModalZoom;