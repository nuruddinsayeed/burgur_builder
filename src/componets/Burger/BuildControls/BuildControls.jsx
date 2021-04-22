import React from 'react'

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BildControl'


const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

function BuildControls(props) {
    return (
        <div className={styles.BuildControls}>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
            {
                controls.map(crls => (
                    <BuildControl
                        key={crls.label}
                        label={crls.label}
                        // adding a fuction that can be execute just by added props
                        add={() => props.addIngredients(crls.type)}
                        remove={() => props.removeIngredients(crls.type)}
                        isDisabled={props.disabledInfo[crls.type]}
                    />
                ))
            }
        </div>
    )
}


export default BuildControls;