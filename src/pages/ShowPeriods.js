import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';

export default function ShowPeriods() {
    return (
        <Container>
            <PeriodContainer>
                <FieldPeriod>
                    <Period> 1º Periodo </Period>

                    <LinkPeriod to='subject/:id'> Calculo </LinkPeriod>
                </FieldPeriod>

                <FieldPeriod>
                    <Period> 2º Periodo </Period>

                    <LinkPeriod to='subject/:id'> Calculo 2 </LinkPeriod>
                </FieldPeriod>

                <FieldPeriod>
                    <Period> 3º Periodo </Period>

                    <LinkPeriod to='subject/:id'> Calculo 3</LinkPeriod>
                </FieldPeriod>
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