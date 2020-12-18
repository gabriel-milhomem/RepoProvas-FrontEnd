import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyle from './assets';
import Navigation from './components/Navigation';
import FormTest from './pages/FormTest';
import ShowTeachers from './pages/ShowTeachers';
import ShowPeriods from './pages/ShowPeriods';
import TeacherTests from './pages/TeacherTests.js';
import SubjectTests from './pages/SubjectTests';
import { FormProvider } from './context/FormContext';

export default function App() {
    return (
        <FormProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Navigation />
                <Switch>
                    <Route path= '/' exact component={Home} />
                    <Route path= '/sendTest' component={FormTest} />
                    <Route path= '/listTeacher' component={ShowTeachers} />
                    <Route path= '/listPeriods' component={ShowPeriods} />
                    <Route path= '/teacher/:id' component={TeacherTests} />
                    <Route path= '/subject/:id' component={SubjectTests} />
                </Switch>
            </BrowserRouter>
       </FormProvider>
    );
}