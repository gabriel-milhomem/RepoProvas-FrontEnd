import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Name, FieldTest, LinkPdf, TypeCategory, CategoriesContainer, Text} from '../components/Tests.styles';

import Container from '../components/Container';

export default function ShowPeriods() {
    const { id } = useParams();
    const [tests, setTests] = useState([]);

    useEffect(() => {
        axios
            .get(`https://repoprovas-backend-milhomem.herokuapp.com/api/tests/teacher/${id}`)
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
            <Name> {tests[0][0].teacher} </Name>
                {tests.map((category, i) => (
                    <CategoriesContainer key={i}>
                        <TypeCategory> {category[0].category} </TypeCategory>
                        {
                            category.map((c, i) => (
                                <FieldTest key={i}>
                                    <LinkPdf 
                                        href= {c.link} 
                                        target= '_blank'
                                    > 
                                        {c.name} 
                                    </LinkPdf>
                                    <LinkPdf 
                                        href= {c.link} 
                                        target= '_blank'
                                    > 
                                        {c.subject} 
                                    </LinkPdf>
                                </FieldTest>
                            ))
                        }
                    </CategoriesContainer>
                ))}
        </Container>
    );
}