import React, { Component } from 'react';
import Preparation from './StepItem';
class Recipee extends Component {
     state = {};
     render() {
          return (
               <article>
                    <div>{this.props.match.params.id}</div>;
               </article>
          );
     }
}

export default Recipee;
