import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';

export default function ShowPeriods() {
    return (
        <Container>
            <TeacherName> Adriano Joaquim </TeacherName>
            <CategoriesContainer>
                <TextType> P1 </TextType>
                <FieldTest>
                    <LinkPdf> 2020.1 </LinkPdf>
                    <LinkPdf> Computação I </LinkPdf>
                </FieldTest>
            </CategoriesContainer>
        </Container>
    );
}

const TeacherName = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: var(--color-green);
    font-size: var(--font-normal);
    font-weight: bold;
    margin: 15px 0px;

    @media (max-width: 600px) {
        font-size: var(--font-small);
    }
`;

const FieldTest = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const LinkPdf = styled.a`
    :hover {
        text-decoration: underline;
    }

    cursor: pointer;
    margin-bottom: 5px;
`;

const TextType = styled.h3`
    font-weight: bold;
    color: (--color--black);
    margin-bottom: 15px;
`;

const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;