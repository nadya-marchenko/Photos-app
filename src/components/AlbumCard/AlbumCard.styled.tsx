import styled from "styled-components";
import { colors } from "../../global/colors";

export const AlbumCardWrapper = styled.article`
    height: 235px;
    width: 300px;
    background-color: ${colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    margin: 16px;

    & img {
        width: 90px;
        height: 90px;
        display: inline-block;
    }

    & section {
        display: flex;
        justify-content: space-around;
        padding: 12px 7px 27px 7px;
    }
`;

export const AlbumNameWrapper = styled.div`
    text-align: center;
    padding: 10px 34px;
    border-bottom: 1px ${colors.default} solid;
    font-size: 15px;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    & p {
        margin: 0;
        line-height: 2;
    }
`;

export const BtnLabel = styled.span`
    vertical-align: middle;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    svg {
        &.MuiSvgIcon-root {
            vertical-align: middle;
        }
    }
`;