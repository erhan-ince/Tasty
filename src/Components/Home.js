import React, { Component } from 'react';
import data from './typeData'
import CategoryMain from './CategoryMain';

class Home extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          this.setState({ data: data });
     }
     // componentDidMount() {
     //      fetch(
     //           'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=adc6b8b2a9dd4856a79419fdcec21e21'
     //      )
     //           .then((response) => response.json())
     //           .then((json) => {
     //                this.setState({ data: json });
     //           });
     // }
     render() {
          return <div className='category'>
               {this.state.data.map((elt, i) =>
                    <CategoryMain
                         key={i}
                         type={elt.type}
                         url={elt.url}
                         title={elt.title}
                    />
               )}
          </div>;
     }
}
export default Home;
