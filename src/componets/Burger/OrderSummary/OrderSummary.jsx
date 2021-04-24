import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../..//UI/Button/Button'


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
        // as button type we can only provied defined class name in Button.css module
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious Burger with following ingredients: </p>
            <ul>
                {orderSummary}
            </ul>
            <p><strong>Total Price: ${props.totoalAmount}</strong></p>
            <p>Coninue to Checkout?</p>
            <Button clicked={props.contShoping} btnType="Success" >CONTINUE</Button>
            <Button clicked={props.cnclShopping} btnType="Danger" >CANCEL</Button>
        </Aux>
    )
}

export default OrderSummary