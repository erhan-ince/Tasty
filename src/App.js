import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Category from './Components/Category';
import Recipee from './Components/Recipee';
import Details from './Components/Details';
function App(props) {
     return (
          <Router>
               {props.children}
               <Switch>
                    <Route path='/' exact>
                         <Home />
                    </Route>
                    <Route path='/categories/:type' component={Category} />
                    <Route path='/recipee/:id' component={Recipee}/>
                    <Route path="/details">
                        <Details />
                    </Route>
               </Switch>
          </Router>
     );
}
export default App;
