import styled from "styled-components";
import { colors } from "../../global/colors";

export const CardWrapper = styled.article`
    background-color: ${colors.bgColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

    & img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
`;

export const TitleWrapper = styled.div`
    text-align: center;
    padding: 3px 20px 6px 20px;
    border-radius: 5px;
    font-size: 12px;

    & p {
        margin: 5px 0;
    }
`;