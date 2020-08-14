import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import TestRecipee from './Components/TestRecipee';
import Footer from './Components/Footer';
function App(props) {
     return (
          
          <Router>
               {props.children}
               <header>
          

          <nav>
              <ul>
            <li><Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS64FOqga63Z_ONEhv_Alc7hvUcDbEHkcg_nA&usqp=CAU" width="100px" alt=""/></Link></li>
            
       
               
              </ul>
            </nav>
            </header>
               <Switch>
                    <Route path='/' exact>
                         <Home />
                    </Route>
                    <Route path='/categories/:type' component={Category} />
                    <Route path='/recipee/:id' component={TestRecipee} />
               </Switch>
               <Footer />
          </Router>
        
     );
}
export default App;
