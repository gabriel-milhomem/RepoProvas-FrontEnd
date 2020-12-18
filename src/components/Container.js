import styled from 'styled-components';

const Container = styled.section`
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default Container;