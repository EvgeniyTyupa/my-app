import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { addToBasket, removeFromBasket, setTotalItemsCount, setDiscount} from '../../Redux/basketReducer';


class BasketContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    addToBasket = (item) => {
        this.props.addToBasket(item);
        this.props.setDiscount(item);
        let totalItems = 0;
        this.props.basket.map(i => {
            totalItems += i.count;
        });
        this.props.setTotalItemsCount(totalItems);
        
    }
    removeFromBasket = (item) => {
        this.props.removeFromBasket(item);
        this.props.setDiscount(item);
        let totalItems = 0;
        this.props.basket.map(i => {
            totalItems += i.count;
        });
        this.props.setTotalItemsCount(totalItems);
        
    }
    totalSum = (item) => {
        let totalSum = (item.count * item.price) - item.discount;
        return totalSum;
    }


    render(){
        return(
            <Basket basket={this.props.basket}
                    itemsCount={this.props.itemsCount}
                    addToBasket={this.addToBasket}
                    removeFromBasket={this.removeFromBasket}
                    totalSum={this.totalSum}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        basket: state.basketReducer.basket,
        itemsCount: state.basketReducer.itemsCount,
    }
}

export default connect(mapStateToProps, {
    addToBasket,
    removeFromBasket,
    setTotalItemsCount,
    setDiscount
})(BasketContainer);