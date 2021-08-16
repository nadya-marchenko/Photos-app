import styled from "styled-components";
import { deviceSizes } from "../../global/device-sizes";

export const GridLayout = styled.section`
    width: ${({ maxColumnCount }) => maxColumnCount < 4 ? 70 : 60}%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: ${deviceSizes.desktop}) {
        width: ${({ maxColumnCount }) => maxColumnCount < 4 ? 90 : 80}%;
    }

    @media screen and (max-width: ${deviceSizes.tablets}) {
        width: ${({ maxColumnCount }) => maxColumnCount < 4 ? 50 : 90}%;
    }
`;