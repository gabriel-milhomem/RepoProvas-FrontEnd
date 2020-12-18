import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import FormContext from '../context/FormContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function FormTest() {
    const { categories, subjects, teachers, setTeachers } = useContext(FormContext);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [teacher, setTeacher] = useState(undefined);
    const [disabledButton, setDisabledButton] = useState(false);
    const history = useHistory();

    if(subject) {
        axios
            .get(`http://localhost:3000/api/teachers/subjects/${subject}`)
            .then(res => {
                setTeachers(res.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
    }

    if(categories.length === 0 || subjects.length === 0 || teachers.length === 0) {
        return <Text> Carregando... </Text>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (disabledButton) return;
        setDisabledButton(true);
        
        if(!subject || !teacher || !category) {
            setDisabledButton(false);
            alert('Selecione todos os campos');
            return;
        }
        
        const test = {name, link, category, subject, teacher};
        axios
            .post('http://localhost:3000/api/tests', test)
            .then(res => {
                setDisabledButton(false);
                history.push('/');
            })
            .catch(err => {
                if (err.response.status === 422) { 
                    alert('Preencha corretamente os campos');
                } else {
                    alert('Houve um erro no envio');
                } 
                console.log(err.response);
                setDisabledButton(false);
            });
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
                        {
                            categories.map(c => <option key={c.id} value={c.id}> {c.name} </option>)
                        }
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
                        {
                            subjects.map(s => <option key={s.id} value={s.id}> {s.name} </option>)
                        }
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

                        {
                            teachers.map(t => <option key= {t.id} value={t.id}> {t.name} </option>)
                        }
                    </Select>
                </FieldSelect>

                <ButtonSubmit
                    width='15%'
                    height= '40px'
                    type='submit'
                    disabled={disabledButton}
                >
                    Enviar
                </ButtonSubmit>
            </Form>
        </Container>
    );
}

const Label = styled.label`
    margin-bottom: 8px;
`;

const ButtonSubmit = styled(Button)`
    margin: 0 auto 10px auto;
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
    align-items: center;
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