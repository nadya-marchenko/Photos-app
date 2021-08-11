import styled from "styled-components";
import { colors } from "../../global/colors";

export const BtnWrapper = styled.a`
    border-radius: 4px;
    text-transform: uppercase;
    background-color: ${colors.primary};
    border: none;
    padding: 8px 20px;
    margin: 4px 2px;
    color: ${colors.bgColor};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    background-color: ${(props) => {
        if(props.color === 'primary') {
            return colors.bgColor;
        }

        if(props.color === 'default') {
            return colors.default;
        }
    }};
    color: ${colors.textColor};
    border: 2px solid ${(props) => {
        if(props.color === 'primary') {
            return colors.primary;
        }

        if(props.color === 'default') {
            return colors.default;
        }
    }};

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.bgColor};
        border: 2px solid ${colors.primary};
    }
`;