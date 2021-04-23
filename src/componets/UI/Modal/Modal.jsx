import React from 'react'
import styles from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {
    return (
        <Aux>
            <Backdrop show={props.showModal} clicked={props.showBackdrop} />
            <div
                className={styles.Modal}
                style={{
                    transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showModal ? 1 : 0
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;