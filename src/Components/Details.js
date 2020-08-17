import React, { Component } from 'react';
import { link } from "react-router-dom";


class Details extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // let type = this.props.match.params
        fetch('https://api.spoonacular.com/recipes/677670/information?apiKey=5c5fa53f94eb43528aef822933bcc292')
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json });
            })
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="Details">
                <h3>{this.state.data.title}</h3>
                <p>Like {this.state.data.aggregateLikes}</p>
                <img src={this.state.data.image} alt="" />
                <div className="main">
                    <div className="">
                        <h4>Duration</h4>
                        <h5>{this.state.data.readyInMinutes}</h5>
                    </div>
                    <div>
                        <h4>Person</h4>
                        <h5>{this.state.data.servings}</h5>
                    </div>
                    <div>
                        <h4>Healthy</h4>
                        <h5>{this.state.data.healthScore}</h5>
                    </div>
                    <div>
                        <h4>Price</h4>
                        <h5>{this.state.data.pricePerServing}€</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;