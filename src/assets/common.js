import { css } from 'styled-components';

export default css`
    * {
        box-sizing: border-box
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    strong {
        font-weight: 600;
    }

    html {
        font-size: 16px;
    }

    body {
        font-style: normal;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        color: var(--color-grey);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: var(--bg-color);
    }

    #root {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
