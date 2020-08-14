import React, { Component } from 'react';

class Recipee extends Component {
    state = {  

    }
    render() { 
        return (  
            <div>{this.props.match.params.id}</div>
        );
    }
}

export default Recipee;