import styled from 'styled-components';
import { deviceSizes } from '../../global/device-sizes';

export const PhotoHeadContainer = styled.section`
  margin: 0 auto;
  width: 68%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${deviceSizes.tablets}) {
    width: 80%;
  }

  @media screen and (max-width: ${deviceSizes.phone}) {
    justify-content: center;
  }
`;

export const PageHeadline = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-right: 10px;
`;
