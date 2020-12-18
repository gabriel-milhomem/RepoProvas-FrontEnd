import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Container from '../../components/Container';
import FormContext from '../../context/FormContext';
import {Label, ButtonSubmit, Field, FieldSelect, FormTitle, Form, Text} from './Form.styles';

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
            .get(`https://repoprovas-backend-milhomem.herokuapp.com/api/teachers/subjects/${subject}`)
            .then(res => {
                setTeachers(res.data);
            })
            .catch(err => {
                alert('Houve um erro');
            });
    }

    if(categories.length === 0 || subjects.length === 0) {
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
            .post('https://repoprovas-backend-milhomem.herokuapp.com/api/tests', test)
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
