import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Category from './Components/Category';
function App(props) {
     return (
          <Router>
               <ul><li>hallo!</li></ul>
               {props.children}
               <Switch>
                    <Route path='/' exact>
                         <Home />
                    </Route>
                    <Route path='/categories/:type' component={Category } />
               </Switch>
          </Router>
     );
}
export default App;
