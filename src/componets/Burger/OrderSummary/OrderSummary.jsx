import React from 'react'
import Aux from '../../../hoc/Aux'


function OrderSummary(props) {
    const orderSummary = Object.keys(props.ingredients)
        .map(ingreKeys => {
            return (
                <li key={ingreKeys}>
                    <span style={{ textTransform: 'capitalize' }}>{ingreKeys}: </span>
                    {props.ingredients[ingreKeys]}
                </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious Burger with following ingredients: </p>
            <ul>
                {orderSummary}
            </ul>
        </Aux>
    )
}

export default OrderSummary