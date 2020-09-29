import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <h1>Fruit Shop</h1>
                <div className={classes.menu}>
                    <div className={classes.item}>
                        <NavLink to="/shop" activeClassName={classes.active}>Shop</NavLink>
                    </div>
                    <div className={classes.item}>
                        <NavLink to="/basket" activeClassName={classes.active}>Basket</NavLink>
                        <span>{props.itemsCount}</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Navbar;