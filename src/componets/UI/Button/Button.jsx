import React from 'react'
import styles from './Button.module.css'

function Button(props) {
    return (
        <button
            // Here we will accept only Success or Danger as btnType props 
            // as this two types only defined in our css file
            className={[styles.Button, styles[props.btnType]].join(" ")}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default Button;