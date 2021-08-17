import styled from 'styled-components';
import { colors } from '../../global/colors';

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;

    & span {
        font-size: 12px;
    }

    & article {
        margin-left: 20px;
    }

    &.MuiSvgIcon-root {
        cursor: pointer;
    }
`;

export const IconArrow = styled.div`
    svg {
        &.MuiSvgIcon-root {
            font-size: 12px;
            color: ${({ isDisable }) => isDisable ? colors.default : colors.textColor};
            cursor: ${({ isDisable }) => isDisable ? 'auto' : 'pointer'};
        }

        &.MuiSvgIcon-root:hover {
            color: ${({ isDisable }) => isDisable ? colors.default : colors.primary};
        }
`;