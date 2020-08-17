import React, { Component } from 'react';
import Info from './Info';
import IngredientsHeader from './IngredientsHeader';
import IngredientsItem from './IngredientsItem';
import PreparationHeader from './PreparationHeader';
import StepItem from './StepItem'
import SearchBarAll from './SearchBarAll';
class Recipee extends Component {
     state = {
          data: [],
          IngredientData: [],
          servings: [],
          amountArr: [],
          perAmountArr: [],
          unitArr: [],
          stepsArr: []
     }
     componentDidMount() {
          fetch(
               `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=5c5fa53f94eb43528aef822933bcc292`
          )
               .then((response) => response.json())
               .then((json) => {
                    this.setState({ data: json });
                    this.setState(
                         {
                              stepsArr: json.analyzedInstructions[0].steps,
                              servings: json.servings,
                              IngredientData: json.extendedIngredients,
                         },
                         this.handleIngredientAmount
                    );
               });
     }
     handleIngredientAmount = () => {
          let newArr = [];
          for (let i = 0; i < this.state.IngredientData.length; i++) {
               newArr.push(this.state.IngredientData[i].amount.toFixed(2));
          }
          this.setState({ amountArr: newArr }, this.handlePerAmount);
     };
     handlePerAmount = () => {
          let newArr = [];
          for (let j = 0; j < this.state.amountArr.length; j++) {
               let perAmount = (this.state.amountArr[j] / this.state.servings).toFixed(2);
               newArr.push(perAmount);
          }
          this.setState({ perAmountArr: newArr }, this.handleUnits);
     };
     handleUnits = () => {
          let newArr = [];
          for (let i = 0; i < this.state.amountArr.length; i++) {
               newArr.push(this.state.IngredientData[i].unit);
          }
          this.setState({ unitArr: newArr });
     };
     handleMinus = () => {
          if (this.state.servings > 1) {
               this.setState(
                    { servings: this.state.servings - 1 },
                    this.handleNewAmount
               );
          }
     };
     handlePlus = () => {
          this.setState(
               { servings: this.state.servings + 1 },
               this.handleNewAmount
          );
     };
     handleNewAmount = () => {
          let newArr = [];
          for (let k = 0; k < this.state.perAmountArr.length; k++) {
               newArr.push(this.state.perAmountArr[k] * this.state.servings);
          }
          this.setState({ amountArr: newArr });
     };
     render() {
          return (
               <article id='recipee'>
                    <SearchBarAll />
                    <Info
                         title={this.state.data.title}
                         aggregateLikes={this.state.data.aggregateLikes}
                         image={this.state.data.image}
                         readyInMinutes={this.state.data.readyInMinutes}
                         servings={this.state.data.servings}
                         healthScore={this.state.data.healthScore}
                         pricePerServing={this.state.data.pricePerServing}
                    />
                    <div className="bottom">
                         <div className='Ingredients'>
                              <IngredientsHeader
                                   handleMinus={this.handleMinus}
                                   counter={this.state.servings}
                                   handlePlus={this.handlePlus}
                              />
                              {this.state.IngredientData.map((elt, i) => (
                                   <IngredientsItem
                                        key={i}
                                        ingredientImg={elt.image}
                                        ingredientAmount={this.state.amountArr[i]}
                                        unit={this.state.unitArr[i]}
                                        ingredient={this.state.IngredientData[i].name}
                                   />
                              ))}
                         </div>
                         <div className="Preparation">
                              <PreparationHeader
                                   totalTime={this.state.data.readyInMinutes}
                                   prepTime={this.state.data.preparationMinutes}
                              />
                              {this.state.stepsArr.map(elt => 
                                   <StepItem
                                        key={elt.number}
                                        stepNumber={elt.number}
                                        step={elt.step}
                                   />
                                   )}
                         </div>
                    </div>
               </article>
          );
     }
}

export default Recipee;
