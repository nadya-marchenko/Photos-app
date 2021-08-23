import styled from 'styled-components';
import { colors } from '../../global/colors';

export const PageHeadline = styled.h1`
  margin: 20px auto;
  width: 68%;
  font-size: 22px;
  font-weight: 500;
`;

export const ProfileWrapper = styled.div`
  width: 68%;
  margin: 23px auto;
  background-color: ${colors.white};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;
