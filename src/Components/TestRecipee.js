import React, { Component } from 'react';
import IngredientsHeader from './IngredientsHeader';
import IngredientsItem from './IngredientsItem';

class TestRecipee extends Component {
    state = {
        data: [],
        IngredientData: [],
        servings: [],
        amountArr: [],
        perAmountArr: [],
        unitArr: [],
    };
    componentDidMount() {
        fetch(
            `https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?apiKey=adc6b8b2a9dd4856a79419fdcec21e21`
        )
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
                this.setState(
                    {
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
            newArr.push(this.state.IngredientData[i].amount);
        }
        this.setState({ amountArr: newArr }, this.handlePerAmount);
    };
    handlePerAmount = () => {
        let newArr = [];
        for (let j = 0; j < this.state.amountArr.length; j++) {
            let perAmount = this.state.amountArr[j] / this.state.servings;
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
        );
    }
}

export default TestRecipee;
