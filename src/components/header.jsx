import React from 'react';
import { HashRouter as Router,Route, NavLink, Switch } from 'react-router-dom';

import Home from './home.jsx';
import StyleTypography from './style_typography.jsx';
import StyleColor from './style_color.jsx';
import StyleIcon from './style_icon.jsx';

import AccordionSample from './sample_accordion.jsx';
import CarouselSample from './sample_carousel.jsx';
import CardSample01 from './sample_card01.jsx';
import BtnSample01 from './sample_btn01.jsx';

import DocFoundGrid from './doc/doc_found_grid';
import DocFoundMotion from './doc/doc_found_motion';
import DocFoundLayer from './doc/doc_found_layer';
import DocFoundType from './doc/doc_found_type';

import CarouselPattern01 from './pattern_carousel_01.jsx';
import HeadPattern01 from './pattern_head_01.jsx';


export class HeaderMenu extends React.Component {
    render(){
        return(
            <nav className="header-wrap" role="navigation">
                <ul className="gnb-menu-wrap">
                    <li className="gnb-menu"><NavLink to={"/"}>Home</NavLink></li>
                    <li className="gnb-menu">
                        <NavLink to={"/style_grid"} className="gnb-link">Foundation</NavLink>
                        <SubmenuStyle />                                                                    
                    </li>
                    <li className="gnb-menu">
                        <NavLink to={"/style"} className="gnb-link">Components</NavLink>
                        <SubmenuComponent />
                    </li>
                    <li className="gnb-menu">
                        <NavLink to={"/pattern_carousel_01"} className="gnb-link">Design Pattern</NavLink>
                        <SubmenuPattern />
                    </li>
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
                    <NavLink to={"/found_grid"}>Grid</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_typography"}>Typography</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/found_type"}>Typography</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_color"}>Color System</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_icon"}>Iconography</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/found_motion"}>Motion</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/found_layer"}>Layer</NavLink>
                </li>
            </ul>            
        );
    }
}

class SubmenuComponent extends React.Component{
    render(){
        return(            
            <ul className="nav-submenu">
                <li className="nav-submenu-link">
                    <NavLink to={"/btn_sample01"}>Buttons 01</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/accordion_sample"}>Accordion</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/carousel_sample"}>Carousel</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/card_sample01"}>Cards</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_icon"}>Iconography</NavLink>
                </li>
                <span></span>
            </ul>            
        );
    }
}

class SubmenuPattern extends React.Component{
    render(){
        return(            
            <ul className="nav-submenu">
                <li className="nav-submenu-link">
                    <NavLink to={"/pattern_carousel_01"}>Carousel Patterns</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/pattern_head_01"}>Article Head</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/carousel_sample"}>Carousel</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/card_sample01"}>Cards</NavLink>
                </li>
                <li className="nav-submenu-link">
                    <NavLink to={"/style_icon"}>Iconography</NavLink>
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
                        <Route path="/found_grid" component={DocFoundGrid} />
                        <Route path="/style_typography" component={StyleTypography} />
                        <Route path="/style_color" component={StyleColor} />
                        <Route path="/style_icon" component={StyleIcon} />
                        <Route path="/found_motion" component={DocFoundMotion} />
                        <Route path="/found_layer" component={DocFoundLayer} />
                        <Route path="/found_type" component={DocFoundType} />
                        <Route path="/accordion_sample" component={AccordionSample} />
                        <Route path="/carousel_sample" component={CarouselSample} />
                        <Route path="/card_sample01" component={CardSample01} />
                        <Route path="/btn_sample01" component={BtnSample01} />
                        <Route path="/pattern_carousel_01" component={CarouselPattern01} />
                        <Route path="/pattern_head_01" component={HeadPattern01} />
                    </Switch>
                </div>
                
            </Router>
        );
    }

}
export default Header;
