import React, { Component } from 'react';

class Home extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          fetch(
               'https://api.spoonacular.com/recipes/complexSearch?type=salad&apiKey=adc6b8b2a9dd4856a79419fdcec21e21'
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json });
               });
     }
     render() {
          return <div className='Article'></div>;
     }
}
export default Home;
