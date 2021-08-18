import styled from "styled-components";
import { colors } from "../../../global/colors";
import { deviceSizes } from "../../../global/device-sizes";

export const NavContainer = styled.li`
    & a {
        font-size: .85em;
        color: ${colors.black};
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        padding: 1.5em;
        transition: .2s;
    }

    & a:hover,
    & .active {
        color: #${colors.white};
        background: ${colors.primary};
    }
`;

export const NavItemLabel = styled.span`
    margin-left: 5px;

    @media screen and (max-width: ${deviceSizes.phone}) {
        margin-top: 5px;
        display: block;
    }
`;