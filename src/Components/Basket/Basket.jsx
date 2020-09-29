import React from 'react';
import classes from './Basket.module.css';

const Basket = (props) => {
    let totalSum = 0;
    if(props.basket){
        props.basket.map(item => {
            totalSum += (item.count * item.price) - item.discount;
        })
    }


    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <h2>Basket</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    
                    {props.basket.map(item => {
                        return(
                            <tbody>
                                <tr>
                                    <th>{item.title}</th>
                                    <th>${item.price}</th>
                                    <th>
                                        <button onClick={()=>props.removeFromBasket(item)}>-</button>
                                        {item.count}
                                        <button onClick={()=>props.addToBasket(item)}>+</button>
                                    </th>
                                    <th>{(item.count * item.price) - item.discount}</th>
                                </tr>                       
                            </tbody>
                        )                    
                    })}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>${totalSum}</th>
                        </tr>
                    </tfoot>
                    
                </table>
            </div>
        </div>
    );
}

export default Basket;