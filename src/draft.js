import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import Header from "./proposal/daehan_webzine/header";
import Container from "./proposal/daehan_webzine/container";


const App = ()=>{
   return(
    <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>
   ); 
}

ReactDOM.render(
    <App />, document.getElementById('app')
);