import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import FormContext from '../context/FormContext';

export default function FormTest() {
    //const { categories, subjects, teachers } = useContext(FormContext);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);


    /*if(categories.length === 0 || subjects.length === 0 || teachers.length === 0) {
        return <Text> Carregando... </Text>
    }*/

    const handleSubmit = () => {
        return;
    }

    return (
        <Container>
            <FormTitle>
                Envie sua prova
            </FormTitle>

            <Form onSubmit={handleSubmit}>
                <Field>
                    <Label htmlFor='title'> Titulo: </Label>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Digite o título'
                        type='text'
                        id='title'
                        required
                    />
                </Field>

                <Field>
                    <Label htmlFor='link'> Link: </Label>
                    <Input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder='Digite a URL'
                        type='url'
                        id='link'
                        required
                    />
                </Field>

                <FieldSelect> 
                    <Label htmlFor='categoryId'> Categoria: </Label>
                    <Select 
                        name='category' 
                        id='categoryId' 
                        value={category}
                        onChange={(e) => (e.target.value !== "0") && setCategory(e.target.value)}
                    >
                        <option value="0"> Selecione a categoria </option>
                        {/*
                            categories.map(c => <option value={c.name}> {c.name} </option>)
                        */}
                    </Select>
                </FieldSelect>

                <FieldSelect> 
                    <Label htmlFor='subjectId'> Disciplina: </Label>
                    <Select 
                        name='subject' 
                        id='subjectId' 
                        value={subject}
                        onChange={(e) => (e.target.value !== "0") && setSubject(e.target.value)}
                    >
                        <option value="0"> Selecione a disciplina </option>
                        {/*
                            subjects.map(s => <option value={s.name}> {s.name} </option>)
                        */}
                    </Select>
                </FieldSelect>

                <FieldSelect> 
                    <Label htmlFor='teacherId'> Docente: </Label>
                    <Select 
                        name='teacher' 
                        id='teacherId' 
                        value={teacher}
                        onChange={(e) => (e.target.value !== "0") && setTeacher(e.target.value)}
                    >
                        <option value="0"> Selecione o docente </option>

                        {/*
                            teachers.map(t => <option value={t.name}> {t.name} </option>)
                        */}
                    </Select>
                </FieldSelect>
            </Form>

            <Button
                width='15%'
                height= '40px'
                type='submit'
                disabled={disabledButton}
            >
                Enviar
            </Button>
        </Container>
    );
}

const Label = styled.label`
    margin-bottom: 8px;
`;

const Field = styled.div`
    width: 47%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const FieldSelect = styled.div`
    width: 30%;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const FormTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: var(--font-normal);
    font-weight: bold;
    margin: 20px 0px;
    color: var(--color-black);
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Container = styled.section`
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Text = styled.h3`
    color: var(--color-green);
    font-size: var(--font-small);
    font-weight: bold;
`;