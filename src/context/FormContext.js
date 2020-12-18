import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FormContext = createContext();

export default FormContext;

export function FormProvider(props) {
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/categories`)
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
        axios
            .get(`http://localhost:3000/api/subjects`)
            .then(response => {
                setSubjects(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
        
        axios
            .get(`http://localhost:3000/api/teachers`)
            .then(response => {
                setTeachers(response.data);
            })
            .catch(err => {
                alert('Houve um erro');
                console.log(err.response);
            });
    }, []);

    const value = {
        categories,
        subjects,
        teachers,
        setTeachers
    }

    return (
        <FormContext.Provider value={value}>
            {props.children}
        </FormContext.Provider>
    );
}