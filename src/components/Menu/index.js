import React from "react";
import List from '../List/List.js';
import Info from '../Info/index.js';
import Add from '../Add/index.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {MenuLinks} from './style.js';
import Login from "../Login/Login";
import Cadastro from "../Login/index.js";

function Menu() {
  return (
       <Router>
        <MenuLinks>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link"> Add</Link>
        </MenuLinks> 

        <Switch>
          <Route exact path="/home" component={List}/>
            <Route exact path="/list" component={List}/>
            <Route exact  path="/add" component={Add}/>
            <Route exact  path="/info" component={Info}/>
            <Route exact  path="/login" component={Login}/>
          <Route exact  path="/" component={Cadastro}/>
        </Switch>
      </Router>    
   
  );
}

export default Menu;
