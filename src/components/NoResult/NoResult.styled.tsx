import styled from 'styled-components';

export const MessageWrapper = styled.p`
  display: flex;
  align-items: center;

  & span {
    margin-left: 7px;
  }

  svg {
    &.MuiSvgIcon-root {
      vertical-align: middle;
    }
  }
`;
