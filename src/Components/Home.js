import React, { Component } from 'react';
import data from './typeData'
import CategoryMain from './CategoryMain';

class Home extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
<<<<<<< HEAD
          fetch(
               'https://api.spoonacular.com/recipes/complexSearch?type=salad&apiKey=adc6b8b2a9dd4856a79419fdcec21e21'
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json });
               });
=======
          this.setState({ data: data });
>>>>>>> 7740d21f256753d70d1ddaeb8a635ef13d3111f7
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
