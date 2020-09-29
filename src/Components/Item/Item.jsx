import React from 'react';
import classes from './Item.module.css';
import action from '../../Assets/Images/action.png';

const Item = (props) => {
    return(
        <div className={classes.item}>
            {props.item.action ? <img src={action} className={classes.action}/> : <></>}
            <img src={props.item.image} className={classes.photo}/>
            <div className={classes.info}>
                <label>{props.item.title}</label>
                <span className={props.item.action && classes.priceAction}>${props.item.price}</span>
                <h5>{props.item.action}</h5>
                <button onClick={()=>props.addToBasket(props.item)}>Buy</button>
            </div>
            
        </div>
    );
}

export default Item;