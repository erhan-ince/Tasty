import React, { Component } from 'react';
import Home from './Home';
import {
   
    Link
  } from "react-router-dom";

class Header extends Component {
    state = {
       
    }
    render() {
        return (<div>
            <header>
          

                <nav>
                    <ul>
                        <li><Link to="/"><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS64FOqga63Z_ONEhv_Alc7hvUcDbEHkcg_nA&usqp=CAU" width="100px"alt="" /></Link></li>
            
       
               
                    </ul>
                </nav>
            </header>
        </div>)
           
        
    }
}

 
export default Header;