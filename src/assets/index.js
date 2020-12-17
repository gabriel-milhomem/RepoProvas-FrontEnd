import { createGlobalStyle } from 'styled-components';
import Root from './root';
import Reset from './reset';
import Common from './common';

const GlobalStyle = createGlobalStyle`
    ${Root}
    ${Reset}
    ${Common}
`;

export default GlobalStyle;