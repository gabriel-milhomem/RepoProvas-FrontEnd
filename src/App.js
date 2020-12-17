import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyle from './assets';
import Navigation from './components/Navigation';
import FormTest from './pages/FormTest';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navigation />
            <Switch>
                <Route path= '/' exact component={Home} />
                <Route path= '/sendTest' component={FormTest} />
            </Switch>
        </BrowserRouter>
    );
}