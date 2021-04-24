import React, { Fragment } from 'react'
import styles from './SideDrawer.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

function SideDrawer(props) {
    let sideDrawerClsses = [styles.SideDrawer, styles.Close]
    if (props.showSideDrawer) {
        sideDrawerClsses = [styles.SideDrawer, styles.Open]
    }

    return (
        <Fragment>
            <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer} />
            <div className={sideDrawerClsses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Fragment>
    )
}


export default SideDrawer