import styled from 'styled-components';

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
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

export const LastElement = styled.span`
    width: 17px;
    padding: 4px;
    height: 17px;
    cursor: pointer;
`;

export const IconArrow = styled.div`
    cursor: pointer;
`;