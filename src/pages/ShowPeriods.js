import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Container from '../components/Container';

export default function ShowPeriods() {
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/subjects/period`)
            .then(response => {
                setPeriods(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
    }, []);

    if(periods.length === 0) {
        return <Text> Carregando... </Text>
    }

    return (
        <Container>
            <PeriodContainer>
                {
                    periods.map(period => (
                        <FieldPeriod key={period.id}>
                            <Period> {period.name} </Period>
                            {
                                period.subjects.map(s => (
                                    <>
                                        <LinkPeriod to={`subject/${s.id}`}> {s.name} </LinkPeriod> <br/>
                                    </>
                                ))
                            }
                        </FieldPeriod>
                    ))
                }
            </PeriodContainer>
        </Container>
    );
}

const Period = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: var(--color-green);
    font-size: var(--font-normal);
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: var(--font-small);
    }
`;

const LinkPeriod = styled(Link)`
    display: inline-block;
    margin-bottom: 5px;
    :hover {
        text-decoration: underline;
    }
`;

const FieldPeriod = styled.div`
    width: 47%;
    margin-bottom: 30px;
`;

const PeriodContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 0px 40px;

    @media (max-width: 600px) {
        padding: 0;
        margin-top: 10px;
    }
`;

const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;