import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';


function BurgerIngredient(props) {
    let ingredient = null

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={styles.Meat}></div>
            break;
        case ('cheese'):
            ingredient = <div className={styles.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={styles.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={styles.Bacon}></div>
            break;
        default:
            ingredient = null;
            break;
    }

    return ingredient;
}

// Setting the requirements as type should be String and is required
// We used 'prop-type' to set that, it should be installed using "npm install --save prop-types"
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredient;