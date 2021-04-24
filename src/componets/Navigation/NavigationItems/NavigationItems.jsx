import React from 'react'
import styels from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

function NavigationsItems() {
    return (
        <ul className={styels.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationsItems