import styled from "styled-components";
import { colors } from "../../global/colors";
import { deviceSizes } from "../../global/device-sizes";

export const CardWrapper = styled.article`
    cursor: pointer;
    background-color: ${colors.bgColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    transition: transform .2s;
    flex: 1 1 0;
    text-align: center;
    margin: 16px;
    flex-basis: ${(props) => (12 / props.col / 12) * 100 - 6}%;

    & img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: ${deviceSizes.tablets}) {
        flex-basis: ${(props) => (12 / props.col / 12) * 100 }%;
    }

    @media screen and (max-width: ${deviceSizes.phone}) {
        flex-basis: ${(props) => (12 / props.col / 12) * 100 + 5 }%;
    }

    @media screen and (max-width: ${deviceSizes.smallPhone}) {
        flex-basis: ${(props) => (12 / props.col / 12) * 100 + 16 }%;
    }
`;

export const TitleWrapper = styled.div`
    text-align: center;
    padding: 3px 20px 6px 20px;
    border-radius: 5px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    & p {
        line-height: 1.8;
        margin: 2px 0;
        text-transform: capitalize;
    }
`;