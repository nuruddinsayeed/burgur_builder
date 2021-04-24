import React from 'react'
import styels from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

function Toolbar() {
    return (
        <header className={styels.Toolbar}>
            <div>Menue</div>
            <Logo />

            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}


export default Toolbar