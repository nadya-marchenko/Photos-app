import styled from "styled-components";
import { colors } from "../../../global/colors";

export const NavContainer = styled.li`
    & a {
        font-size: .85em;
        color: ${colors.textColor};
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        padding: 1.5em;
        transition: .2s;
    }

    & a:hover,
    & .active {
        color: #${colors.bgColor};
        background: ${colors.primary};
    }

    &.item-nav {
        margin-left: 5px;
    }

    @media screen and (max-width: 500px) {
        &.item-nav {
            margin-top: 5px;
            display: block;
        }
`;