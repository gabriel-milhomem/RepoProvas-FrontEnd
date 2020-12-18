import Button from '../../components/Button';
import styled from 'styled-components';

export const Label = styled.label`
    margin-bottom: 8px;
`;

export const ButtonSubmit = styled(Button)`
    margin: 0 auto 10px auto;
    background: var(--color-green);
`;

export const Field = styled.div`
    width: 47%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const FieldSelect = styled.div`
    width: 30%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const FormTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: var(--font-normal);
    font-weight: bold;
    margin: 20px 0px;
    color: var(--color-green);
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;