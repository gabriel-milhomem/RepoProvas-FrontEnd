import styled from 'styled-components';

export const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: var(--color-green);
    font-size: var(--font-normal);
    font-weight: bold;
    margin: 15px 0px;

    @media (max-width: 600px) {
        font-size: var(--font-small);
    }
`;

export const FieldTest = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const LinkPdf = styled.a`
    :hover {
        text-decoration: underline;
    }

    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const TypeCategory = styled.h3`
    font-weight: bold;
    color: (--color--black);
    margin-bottom: 15px;
`;

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`;

export const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;