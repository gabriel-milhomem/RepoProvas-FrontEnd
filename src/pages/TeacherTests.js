import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Container from '../components/Container';

export default function ShowPeriods() {
    const { id } = useParams();
    console.log(id);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/tests/teacher/${id}`)
            .then(response => {
                setTests(response.data);
                console.log(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
    }, []);

    if(tests.length === 0) {
        return <Text> Carregando... </Text>
    }

    return (
        <Container>
            <TeacherName> {tests[0][0].teacher} </TeacherName>
                {tests.map(category => (
                    <CategoriesContainer>
                        <TextType> {category[0].category} </TextType>
                        {
                            category.map(c => (
                                <FieldTest>
                                    <LinkPdf href= {c.link} target= '_blank'> {c.name} </LinkPdf>
                                    <LinkPdf href= {c.link} target= '_blank'> {c.subject} </LinkPdf>
                                </FieldTest>
                            ))
                        }
                    </CategoriesContainer>
                ))}
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
    width: 40%;
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
    margin-bottom: 10px;
    margin-left: 10px;
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
    margin-bottom: 10px;
`;

const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;