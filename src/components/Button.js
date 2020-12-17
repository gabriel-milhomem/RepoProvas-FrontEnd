import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border: 2px solid grey;
    color: var(--color-white);
    background: var(--color-black);
    padding: 5px;
    margin: 10px;
    transition: opacity .25s linear;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    opacity: 1;
    font-size: var(--font-small);
    display: block;

    :hover {
        opacity: 0.8;
    }

    @media (max-width: 600px) {
        width: 60%;
        margin: 10px;
    }
`;

export default Button;