import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import Main from './Main';
import { addToBasket } from '../../Redux/basketReducer';
import { setTotalItemsCount, setDiscount } from '../../Redux/basketReducer';

class MainContainer extends React.Component{
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
        })
        this.props.setTotalItemsCount(totalItems);

    }
    render(){
        return(
            <>
                {this.props.isFetching ? <Preloader/> 
                : <Main items={this.props.items}
                        addToBasket={this.addToBasket}/>}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        items: state.storeReducer.items,
        basket: state.basketReducer.basket,
        isFetching: state.storeReducer.isFetching
    }
}

export default connect(mapStateToProps, {
    addToBasket,
    setTotalItemsCount,
    setDiscount
})(MainContainer);