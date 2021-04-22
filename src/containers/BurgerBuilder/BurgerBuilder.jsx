import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../componets/Burger/Burger'

class BurgerBuilder extends Component {

    // We can use state inside a constractor also
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Contros</div>
            </Aux>
        );
    }
}


export default BurgerBuilder;