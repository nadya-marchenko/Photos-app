import { createGlobalStyle } from 'styled-components';
import { colors } from './global/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.bg};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: colors;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;