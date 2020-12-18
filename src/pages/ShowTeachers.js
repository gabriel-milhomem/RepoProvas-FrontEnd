import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';

export default function ShowTeachers() {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Professores
                </Title>
                <Title>
                    Num. Provas
                </Title>
            </TitleContainer>

            <TeacherContainer>
                <LinkTeacher to='teacher/:id'> Luis Fernando </LinkTeacher>
                <LinkTeacher to='teacher/:id'> 4 </LinkTeacher >
            </TeacherContainer>
        </Container>
    );
}

const LinkTeacher = styled(Link)`
    :hover {
        text-decoration: underline;
    }
`;

const TeacherContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 30px;
`;

const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

const Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: var(--color-green);
    font-size: var(--font-normal);
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: var(--font-small);
    }
`;