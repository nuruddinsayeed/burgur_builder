import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../componets/Burger/Burger'
import BuildControls from '../../componets/Burger/BuildControls/BuildControls'
import Modal from '../../componets/UI/Modal/Modal'
import OrderSummary from '../../componets/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.8,
    cheese: 0.9,
    meat: 1.3
}
class BurgerBuilder extends Component {

    // We can use state inside a constractor also
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        showSummary: false
    }

    purchasable(ingredients) {
        // lets add all the value of ingredients
        const totalIngredients = Object.keys(ingredients)
            .map(ingreKey => ingredients[ingreKey])
            .reduce((sum, currEl) => {
                return sum + currEl
            }, 0)

        this.setState({ purchasable: totalIngredients > 0 })
    }

    showSummaryHandler = () => {
        this.setState({
            showSummary: true
        })
    }

    removeSummary = () => {
        //Handle showing the dark backdrop under Order summary
        this.setState({
            showSummary: false
        })
    }

    continueShopping = () => {
        alert("Order placed and cost only: $" + this.state.totalPrice.toFixed(2))
        this.removeSummary()
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        }
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type]

        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.purchasable(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return
        }
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: oldCount - 1
        }

        const reducedPrice = this.state.totalPrice - INGREDIENT_PRICE[type]
        this.setState({
            totalPrice: reducedPrice,
            ingredients: updatedIngredients
        })
        this.purchasable(updatedIngredients)
    }


    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal showModal={this.state.showSummary} showBackdrop={this.removeSummary}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        contShoping={this.continueShopping}
                        cnclShopping={this.removeSummary}
                        totoalAmount={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredients={this.addIngredientHandler}
                    removeIngredients={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    //check if user added any ingredients
                    isPurchasable={this.state.purchasable}
                    showSummary={this.showSummaryHandler}
                />
            </Aux>
        );
    }
}


export default BurgerBuilder;