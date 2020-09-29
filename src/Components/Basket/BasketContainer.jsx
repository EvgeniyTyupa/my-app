import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { addToBasket, removeFromBasket, setTotalItemsCount} from '../../Redux/basketReducer';


class BasketContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    addToBasket = (item) => {
        this.props.addToBasket(item);
        let totalItems = 0;
        this.props.basket.map(i => {
            totalItems += i.count;
        });
        this.props.setTotalItemsCount(totalItems);
        
    }
    removeFromBasket = (item) => {
        this.props.removeFromBasket(item);
        let totalItems = 0;
        this.props.basket.map(i => {
            totalItems += i.count;
        });
        this.props.setTotalItemsCount(totalItems);
        
    }


    render(){
        return(
            <Basket basket={this.props.basket}
                    itemsCount={this.props.itemsCount}
                    addToBasket={this.addToBasket}
                    removeFromBasket={this.removeFromBasket}/>
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
})(BasketContainer);