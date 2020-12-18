import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Name, FieldTest, LinkPdf, TypeCategory, CategoriesContainer, Text} from '../components/Tests.styles';

import Container from '../components/Container';

export default function SubjectTests() {
    const { id } = useParams();
    const [tests, setTests] = useState([]);
    
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/tests/subject/${id}`)
            .then(response => {
                setTests(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
            });
    }, []);

    if(tests.length === 0) {
        return <Text> Carregando... </Text>
    }

    return (
        <Container>
            <Name> {tests[0][0].subject} </Name>
                {tests.map((category, i) => (
                    <CategoriesContainer key={i}>
                        <TypeCategory> {category[0].category} </TypeCategory>
                        {
                            category.map((c, i) => (
                                <FieldTest key={i}>
                                    <LinkPdf href= {c.link} target= '_blank'> {c.name} </LinkPdf>
                                    <LinkPdf href= {c.link} target= '_blank'> {c.teacher} </LinkPdf>
                                </FieldTest>
                            ))
                        }
                    </CategoriesContainer>
                ))}
        </Container>
    );
}