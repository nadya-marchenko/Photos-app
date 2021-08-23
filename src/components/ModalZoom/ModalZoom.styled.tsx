import styled, { keyframes } from 'styled-components';
import { colors } from '../../global/colors';
import { deviceSizes } from '../../global/device-sizes';

const ZoomEffect = keyframes`
    from {
        transform: scale(0.1);
    }
    to {
        transform: scale(1);
    }
`;

export const ModalWrapper = styled.section`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${colors.black};
  background-color: ${colors.dark};
`;

export const ModalImg = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 500px;
  animation: ${ZoomEffect} 0.6s linear;

  @media screen and (max-width: ${deviceSizes.desktop}) {
    width: 100%;
  }
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: ${colors.white};
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: ${colors.default};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalCaption = styled.p`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: ${colors.white};
  padding: 10px 0;
  height: 150px;
  text-transform: capitalize;
  animation: ${ZoomEffect} 0.6s linear;
`;
