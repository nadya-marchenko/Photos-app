import styled from 'styled-components';
import { colors } from '../../global/colors';

export const InputWrapper = styled.article`
    height: 37px;
    border-radius: 4px;
    position: relative;
    max-width: ${({ type }) => type === 'search' && '225'}px;
    
    & input {
        padding: ${({ type }) => type === 'search' ? '22px 5px 12px 39px' : '17px 9px 8px 9px'};
        width: 100%;
        height: 1.19em;
        margin: 0;
        border: 0;
    }

    & input:focus {
        outline: none;
    }
`;

export const TextFieldSet = styled.fieldset`
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0 8px;
    position: absolute;
    border: 1px ${colors.formBorderColor} solid;
    border-radius: 4px;
    overflow: hidden;
    pointer-events: none;

    & legend {
        text-align: left;
        color: ${colors.formBorderColor};
        font-size: 13px;
    }

    & span {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

export const InputIcon = styled.span`
    position: absolute;
    top: 10px;
    left: 8px;
`;