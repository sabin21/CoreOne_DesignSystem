import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import Header from "./proposal/daehan_webzine/header_a";
import Container from "./proposal/daehan_webzine/container_a";


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