import React from 'react';
import styles from './Burgger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


function Burger(props) {

    //Now lets convert recieved ingredients objects into # Array of desired jsx array of elements
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingreKey => {
            // Here using spred operator to spred Array elements
            // So it will generate proper number of empty array 
            // ie Array(3) -> [" ", " ", " "]
            return [...Array(props.ingredients[ingreKey])].map((_, ingreIndex) => {
                // here used _ as array has empty value
                return <BurgerIngredient key={ingreKey + ingreIndex} type={ingreKey} />;
                // using key as unique key is required
            })
        })

    console.log(transformedIngredients)
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger