import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import './Components/Header.css'
import Header from './Components/Header';
import Category from './Components/Category';
import Recipee from './Components/Recipee';
import Footer from './Components/Footer';
import './Components/Details.css';
function App(props) {
     return (
          <Router>
               {props.children}
               <Header />
               <Switch>
                    <Route path='/' exact>
                         <Home />
                    </Route>
                    <Route path='/categories/:type' component={Category} />
                    <Route path='/recipee/:id' component={Recipee} />
               </Switch>
               <Footer />
          </Router>
     );
}
export default App;