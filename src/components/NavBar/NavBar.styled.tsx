import styled from "styled-components";
import { deviceSizes } from "../../global/device-sizes";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 15px black;
    margin-bottom: 15px;
`;

export const Logo = styled.a`
    margin-left: 30px;
    text-decoration: none;
    text-transform: uppercase;

    @media screen and (max-width: ${deviceSizes.phone}) {
        margin-left: 15px;
        text-align: center;
        font-size: 10px;
    }
`;

export const NavWrapper = styled.nav`
    margin-right: 30px;

    & ul {
        display: flex;
        list-style: none;
        margin: 0;
    }

    svg {
        &.MuiSvgIcon-root {
            vertical-align: middle;
        }
    }

    @media screen and (max-width: ${deviceSizes.phone}) {
        font-size: 12px;
        margin: 0;
    
        & ul {
            padding-left: 0;
        }
`;