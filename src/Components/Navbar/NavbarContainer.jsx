import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { setTotalItemsCount } from '../../Redux/basketReducer';

class NavbarContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.setTotalItemsCount(this.props.basket.length);
    }

    render(){
        return(
            <Navbar itemsCount={this.props.itemsCount}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        itemsCount: state.basketReducer.itemsCount,
        basket: state.basketReducer.basket
    }
}

export default connect(mapStateToProps, {
    setTotalItemsCount
})(NavbarContainer);