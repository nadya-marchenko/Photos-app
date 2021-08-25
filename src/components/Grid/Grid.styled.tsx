import styled from 'styled-components';
import { deviceSizes } from '../../global/device-sizes';
import { GridLayoutProps } from './Grid.d';

export const GridLayout = styled.section<GridLayoutProps>`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: ${deviceSizes.desktop}) {
    width: ${({ maxColumnCount }) => (Number(maxColumnCount) < 4 ? 90 : 80)}%;
  }

  @media screen and (max-width: ${deviceSizes.tablets}) {
    width: ${({ maxColumnCount }) => (Number(maxColumnCount) < 4 ? 50 : 90)}%;
  }
`;
