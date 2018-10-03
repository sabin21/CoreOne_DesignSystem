import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Home from './home.jsx';
import Style from './style.jsx';

export class HeaderNav extends React.Component{
    render(){
        return(
            <nav className="header-wrap">
                <ul className="menu-wrap">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/style"}>Style</NavLink></li>
                    <li><NavLink to={"/style"}>Design Components</NavLink></li>
                    <li><NavLink to={"/style"}>Page Template</NavLink></li>
                    <li><NavLink to={"/style"}>Style</NavLink></li>
                </ul>                
            </nav>
        );
    }
}
export class Header extends React.Component{
    render(){
        return(
            <Router>
                <div className="app-wrap">
                    <HeaderNav />
                    <Route exact path="/" component={Home} />
                    <Route path="/style" component={Style} />
                </div>
            </Router>
        );
    }

}
export default Header;
