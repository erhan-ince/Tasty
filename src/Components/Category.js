import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import SearchBarAll from './SearchBarAll';

class Category extends Component {
     state = {
          data: [],
     };
     componentDidMount() {
          let type = this.props.match.params.type;
          fetch(
               `https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=b294483d11db4c388684654c4727b987`
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json.results });
               });
     }
     render() {
          return (
               <div>
                    <SearchBarAll />
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
               </div>
          );
     }
}

export default Category;
