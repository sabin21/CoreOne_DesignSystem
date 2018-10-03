import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as HashRouter } from 'react-router-dom';

import Header from './components/header.jsx'

import './style.scss';

const App = ()=>{
    return (
        <HashRouter>
            <div>
                <Header />
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);