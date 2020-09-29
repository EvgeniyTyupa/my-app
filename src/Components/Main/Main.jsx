import React from 'react';
import Item from '../Item/Item';
import classes from './Main.module.css';

const Main = (props) => {
    let items;
    if(props.items){
        items = props.items.map(item => {
            return <Item item={item} addToBasket={props.addToBasket}/>
        });
        
    }
    

    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <h2>Item list</h2>
                <div className={classes.itemsList}>
                    {items}
                </div>
                
            </div>
        </div>
    );
}

export default Main;