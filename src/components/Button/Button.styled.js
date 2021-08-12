import styled from "styled-components";
import { colors } from "../../global/colors";

export const BtnWrapper = styled.button`
    height: 20px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: ${colors.primary};
    border: none;
    padding: ${({ type }) => type === 'submit' ? '7px 12px 24px 12px' : '4px 7px 27px 12px'};
    margin: 2px 7px;
    color: ${colors.bgColor};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: ${({ color }) => color === 'primary' ? colors.bgColor : colors.default};
    color: ${colors.textColor};
    border: 2px solid ${({ color }) => color === 'primary' ? colors.primary : colors.default};

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.bgColor};
        border: 2px solid ${colors.primary};
    }
`;