import styled from 'styled-components';
import { colors } from '../../global/colors';
import { IconArrowProps } from './Pagination.d';

export const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;

  & span {
    font-size: 12px;
  }

  & article {
    margin-left: 20px;
  }

  &.MuiSvgIcon-root {
    cursor: pointer;
  }

  & select {
    background-color: ${colors.bg};
  }
`;

export const IconArrow = styled.div<IconArrowProps>`
    svg {
        &.MuiSvgIcon-root {
            font-size: 12px;
            color: ${({ isDisable }) =>
              isDisable ? colors.default : colors.black};
            cursor: ${({ isDisable }) => (isDisable ? 'auto' : 'pointer')};
        }

        &.MuiSvgIcon-root:hover {
            color: ${({ isDisable }) =>
              isDisable ? colors.default : colors.primary};
        }
`;
