import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Button from './Button';
import { useHistory, Link } from 'react-router-dom';

export default function Navigation() {
    const history = useHistory();
    
    return (
        <MainContainer>
            <Title>
                <Link to='/'>
                    RepoProvas
                </Link>
            </Title>
            
            <NavContainer>
                <Button 
                    onClick= {() => history.push('/listPeriods')} 
                    width='25%'
                    height='50px'
                >
                    Por disciplina
                </Button>
                
                <Button 
                    onClick= {() => history.push('/listTeacher')}
                    width='25%'
                    height='50px'
                >
                    Por professor
                </Button>
                
                <Button 
                    onClick= {() => history.push('/sendTest')} 
                    width='25%' 
                    height='50px'
                >
                    Enviar prova
                </Button>
            </NavContainer>
        </MainContainer>
    );
}

const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const MainContainer = styled.main`
    width: 900px;
    
    @media (max-width: 600px) {
        width: 100%;
    }
`;