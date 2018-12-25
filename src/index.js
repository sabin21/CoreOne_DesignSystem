import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as HashRouter } from 'react-router-dom';

import SideMenu from './components/header'

import './style.scss';

const App = ()=>{
    return (
        <HashRouter>
            <div>
                <SideMenu />
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);