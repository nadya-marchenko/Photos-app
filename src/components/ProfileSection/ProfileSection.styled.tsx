import styled from 'styled-components';
import { colors } from '../../global/colors';
import { deviceSizes } from '../../global/device-sizes';
import { InputsWrapperProps } from '../../components/ProfileSection/ProfileSection';

export const SectionWrapper = styled.section`
  svg {
    &.MuiSvgIcon-root {
      vertical-align: middle;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 25px;
  border-bottom: 1px ${colors.default} solid;
  font-size: 15px;

  & span {
    display: inline-block;
    margin-right: 10px;
  }

  & h2 {
    font-size: 17px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export const InputsWrapper = styled.div<InputsWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 36px 23px;
  border-bottom: 1px ${colors.default} solid;

  & article {
    margin: 5px;
    flex-basis: ${({ col }) => (col === 1 ? 100 : (12 / col / 12) * 100 - 5)}%;
  }

  & input {
    padding-top: 13px;
  }

  @media screen and (max-width: ${deviceSizes.phone}) {
    & article {
      margin: 5px;
      flex-basis: 100%;
    }
  }
`;
