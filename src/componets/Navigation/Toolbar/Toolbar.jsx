import React from 'react'
import styels from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

function Toolbar(props) {
    return (
        <header className={styels.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={styels.Logo}>
                <Logo />
            </div>

            <nav className={styels.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}


export default Toolbar