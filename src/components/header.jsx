import React from 'react';
import { HashRouter as Router,Route, NavLink, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import Home from './home.jsx';
import StyleGrid from './style_grid.jsx';
import StyleTypography from './style_typography.jsx';
import StyleColor from './style_color.jsx';
import StyleIcon from './style_icon.jsx';
/*
const Loading = () => <div>Loading...</div>;
const Style = Loadable({
    loader: () => import('./style.jsx'),
    loading: Loading
  });
*/

export class HeaderMenu extends React.Component {
    render(){
        return(
            <nav className="header-wrap" role="navigation">
                <ul className="gnb-menu-wrap">
                    <li className="gnb-menu"><NavLink to={"/"}>Home</NavLink></li>
                    <li className="gnb-menu">
                        <NavLink to={"/style_grid"} className="gnb-link">Style</NavLink>
                        <SubmenuStyle />                                                                    
                    </li>
                    <li className="gnb-menu">
                        <NavLink to={"/style"} className="gnb-link">Components</NavLink>
                    </li>
                    <li className="gnb-menu"><NavLink to={"/style"} className="gnb-link">Design Pattern</NavLink></li>
                    <li className="gnb-menu"><NavLink to={"/style"} className="gnb-link">Page Pattern</NavLink></li>
                </ul>                
            </nav>
        );
    }
}
class SubmenuStyle extends React.Component{
    render(){
        return(            
            <ul className="nav-submenu">
                <li className="nav-submenu-link">
                    <NavLink to={"/style_grid"}>Grid</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_typography"}>Typography</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_color"}>Color System</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_icon"}>Iconngraphy</NavLink>
                </li>
                <span></span>
            </ul>            
        );
    }
}


export class Header extends React.Component{
    

    render(){
        return(
            <Router>
                
                <div className="app-wrap">
                    <HeaderMenu />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/style_grid" component={StyleGrid} />
                        <Route path="/style_typography" component={StyleTypography} />
                        <Route path="/style_color" component={StyleColor} />
                        <Route path="/style_icon" component={StyleIcon} />
                    </Switch>
                </div>
                
            </Router>
        );
    }

}
export default Header;
