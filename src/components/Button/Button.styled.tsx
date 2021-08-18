import styled from "styled-components";
import { colors } from "../../global/colors";

export const BtnWrapper = styled.button`
    height: 20px;
    border-radius: 4px;
    text-transform: uppercase;
    padding: ${({ type }) => type === 'submit' ? '7px 12px 24px 12px' : '4px 7px 27px 12px'};
    margin: 2px 7px;
    text-align: center;
    font-size: 14px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: ${({ color }) => color === 'primary' ? colors.white : colors.default};
    color: ${colors.black};
    border: 2px solid ${({ color }) => color === 'primary' ? colors.primary : colors.default};

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.white};
        border: 2px solid ${colors.primary};
    }
`;