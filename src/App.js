import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyle from './assets';
import Navigation from './components/Navigation';
import FormTest from './pages/FormTest';
import FormProvider from './context/FormContext';

export default function App() {
    return (
        //<FormProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Navigation />
                <Switch>
                    <Route path= '/' exact component={Home} />
                    <Route path= '/sendTest' component={FormTest} />
                </Switch>
            </BrowserRouter>
       //</FormProvider>
    );
}