import React from 'react'
import {Link} from "react-router-dom";
import classes from './header.module.css'
export const Header = () => {
    const user = {
        name: "Arpit Jaswal"
    }

    const cart ={
        totalCount:10
    }
    return (
    <>
    <div className={classes.header}>

       {/* logo */}
        <div>
            <Link to="/" className={classes.logo}>eBhojnalya</Link>
        </div>

        {/* navbar */}
        <div className={classes.navbar}>
           {
            user?
            (
                <div className={classes.links}>
                    <Link to="/orders" className={classes.link}>Orders</Link>
                    <Link to="/cart" className={classes.link}>Cart<span className={classes.quantity}>{cart.totalCount>0 && cart.totalCount}</span>
                    </Link>
                    <Link to="/profile-page" className={classes.link}>{user.name}</Link>
                    <Link to="/logout" className={classes.logout}>Logout</Link>
                </div>
            ):(
                <Link to="/login">Login</Link>
            )
           }
        </div>

    </div>
    </>
  )
}
