import React from 'react'
import {Link} from 'react-router-dom'


import classes from './Header.css'
import GoogleAuth from '../GoogleAuth/GoogleAuth'

const Header = () => {
    return (
        <div className={classes.Menu}>
            <ul className={classes.Header}>
                <li className={classes.HeaderItems}>
                    <Link className={classes.HeaderLinks} to="/">Streamy</Link>
                </li>
                <li className={classes.HeaderLinksRight}>
                    <GoogleAuth />
                </li> 
                <li className={classes.HeaderLinksRight}>
                    <Link className={classes.HeaderLinks} to="/">All Streams</Link>
                </li>
           
            
                
            </ul>
        </div>
    )
}


export default Header
