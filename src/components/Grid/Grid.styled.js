import styled from "styled-components";

export const GridLayout = styled.section`
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const GridItem = styled.article`
    flex: 1 1 0;
    text-align: center;
    margin: 16px;
    flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100 - 6}%;

    @media screen and (max-width: 768px) {
        flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100 }%;
    }

    @media screen and (max-width: 540px) {
        flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100 + 5 }%;
    }

    @media screen and (max-width: 450px) {
        flex-basis: ${(props) => (12 / props.maxColumnCount / 12) * 100 + 16 }%;
    }
`;