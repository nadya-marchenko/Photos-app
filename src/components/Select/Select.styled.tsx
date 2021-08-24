import styled from "styled-components";
import { colors } from '../../global/colors';

export const InputWrapper = styled.article`
    border-radius: 4px;
    position: relative;
    width: 86px;
    padding: 14px 0px 10px 0px;

    & select {
        padding: 0px 6px 0px 16px;
        width: 76%;
        height: 1.19em;
        margin: 0;
        border: 0;
    }

    & select:focus {
        outline: none;
    }
`;

export const SelectFieldSet = styled.fieldset`
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 8px;
    position: absolute;
    border: 1px ${colors.grey} solid;
    border-radius: 4px;
    overflow: hidden;
    pointer-events: none;

    & legend {
        text-align: left;
        color: ${colors.grey};
        font-size: 13px;
    }

    & span {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
    }
    
`;