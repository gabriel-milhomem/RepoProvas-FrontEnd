import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Container from '../components/Container';

export default function ShowTeachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/teachers`)
            .then(response => {
                setTeachers(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
            });
    }, []);

    if(teachers.length === 0) {
        return <Text> Carregando... </Text>
    }

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
            {
                teachers.map(t => 
                    <TeacherContainer key={t.id}>
                        <LinkTeacher to={`teacher/${t.id}`}> {t.name} </LinkTeacher>
                        <LinkTeacher to={`teacher/${t.id}`}> {t.numberTests} </LinkTeacher>
                    </TeacherContainer>
                )
            }
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

const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;