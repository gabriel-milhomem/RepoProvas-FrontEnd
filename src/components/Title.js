import styled from 'styled-components';
import React from 'react';

export default function Title(props) {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    );
}

const StyledTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: var(--font-large);
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    margin: 50px 0px 20px 0px;
    color: var(--color-black);
    cursor: pointer;

    @media (max-width: 600px) {
        font-size: 3rem;
        margin-top: 25px;
    }
`;