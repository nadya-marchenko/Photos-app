import styled from 'styled-components';
import { colors } from '../../global/colors';

export const SearchRow = styled.form`
  display: flex;

  & input {
    background-color: ${colors.bg};
  }
`;
