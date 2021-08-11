import styled from "styled-components";
import { colors } from "../../global/colors";

export const AlbumCardWrapper = styled.article`
    height: 246px;
    width: 300px;
    background-color: ${colors.bgColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

    & img {
        width: 90px;
        height: 90px;
        display: inline-block;
    }

    & section {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
        padding: 4px 7px;
    }

    & a {
        margin: 0 10px 15px 0;
        float: right;
    }
`;

export const AlbumNameWrapper = styled.div`
    text-align: center;
    padding: 3px 20px 6px 20px;
    border-bottom: 1px ${colors.default} solid;
    margin-bottom: 13px;
    font-size: 15px;
    text-transform: uppercase;

    & p {
        margin: 10px 0;
    }
`;

export const BtnLabel = styled.span`
    vertical-align: middle;
`;