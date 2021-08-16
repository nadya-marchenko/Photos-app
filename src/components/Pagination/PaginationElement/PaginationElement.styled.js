import styled from 'styled-components';
import { colors } from '../../../global/colors';

export const ElementWrapper = styled.span`
    background-color: ${({ isActive }) => isActive && colors.default};
    border-radius: ${({ isActive }) => isActive && '5'}px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 13px;
    width: 17px;
    padding: 4px;
    height: 17px;
    text-align: center;
`;