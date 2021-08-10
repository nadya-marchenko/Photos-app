import styled from "styled-components";

export const GridLayout = styled.section`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;

export const GridItem = styled.article`
    flex: 1 1 0;
    text-align: center;
    margin: 12px;
`;