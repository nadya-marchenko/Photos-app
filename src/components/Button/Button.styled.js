import styled from "styled-components";
import { colors } from "../../global/colors";


export const BtnWrapper = styled.button`
    border-radius: 4px;
    text-transform: uppercase;
    padding: 8px 16px;
    background-color: ${colors.primary};
    border: none;
    color: ${colors.bgColor};
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    &.primary-color-btn {
        background-color: ${colors.bgColor}; 
        color: ${colors.textColor}; 
        border: 2px solid ${colors.primary};
    }

    &.primary-color-btn:hover {
        background-color: ${colors.primary};
        color: ${colors.bgColor};
    }

    &.default-color-btn  {
        background-color: ${colors.default};
        color: ${colors.textColor}; 
        border: 2px solid ${colors.default};
    }
    
    &.default-color-btn:hover {
        background-color: ${colors.primary};
        border: 2px solid ${colors.primary};
        color: ${colors.bgColor};
    }
`;