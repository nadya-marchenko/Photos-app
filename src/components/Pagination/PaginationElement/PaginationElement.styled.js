import styled from 'styled-components';
import { colors } from '../../../global/colors';

export const ElementWrapper = styled.span`
    background-color: ${(props) => props.isActive && colors.default};
    border-radius: ${(props) => props.isActive && '5'}px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 13px;
    width: 17px;
    padding: 4px;
    height: 17px;
    text-align: center;
`;