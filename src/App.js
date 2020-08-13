import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
function App(props) {
     return (
          <Router>
               {props.children}
               <div className='App'>
                    <nav>
                         <ul>
                              <li>
                                   <Link to='/'>All Beers</Link>
                              </li>
                              <li>
                                   <Link to='/'>Random Beer</Link>
                              </li>
                         </ul>
                    </nav>
                    <Switch>
                         <Route path='/' exact>
                              <Home />
                         </Route>
                    </Switch>
               </div>
          </Router>
     );
}
export default App;
