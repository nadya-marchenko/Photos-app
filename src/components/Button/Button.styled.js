import styled from "styled-components";
import { colors } from "../../global/colors";

export const BtnWrapper = styled.a`
    height: 20px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: ${colors.primary};
    border: none;
    padding: 6px 12px 6px 12px;
    margin: 2px 7px;
    color: ${colors.bgColor};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
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