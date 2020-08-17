import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Category extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          let type = this.props.match.params.type;
          fetch(
               `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=8e50195cba6648a98e54903b9d884d84`
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json.results });
               });
     }
     render() {
          return (
               <div id='category'>
                    {this.state.data.map((elt) => (
                         <CategoryItem
                              key={elt.id}
                              id={elt.id}
                              url={elt.image}
                              title={elt.title}
                         />
                    ))}
               </div>
          );
     }
}

export default Category;
