import React, { Component } from 'react';
import { connect } from 'react-redux';


import axios from '../../axios-items';

import * as actions from '../../store/actions/index';
import VisibleItems from '../../store/selectors/visibleItems'

import Grid from '../../components/Grid/Grid';
import ShopItem from '../../components/ShopItem/ShopItem';
import Filters from '../../containers/Filters/Filters';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'; 

class Checkout extends Component {

    state = {
        showingItems : null,
    }

    
    componentDidMount () {
        this.props.onInitItems();
    }

    addToCartHandler(id, quantity) {
        let itemExsists = this.props.cart.map(item => item.id).includes(id);
        itemExsists ? this.props.updateCartItem(id, quantity) : this.props.addCartItem(id, quantity);
    }
    
    mapItems = (items) => {

        return Object.keys(items)
                .map( key => {

                    const image = require('../../assets/images/items/' + items[key].img_path)
                    
                    return <ShopItem 
                        key={key}
                        name={items[key].name} 
                        price={items[key].price.toFixed(2)}
                        description={items[key].description}
                        path={image}
                        added={() => this.addToCartHandler(items[key].id, 1)}/>
                })
    }

    render () {
        let itemsArray = null;

        if(this.props.items){
            itemsArray = this.mapItems(this.props.items);   
        }
    
        return (
            <div>
                <Filters></Filters>
                <Grid columns={4}>{itemsArray}</Grid>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        items:VisibleItems(state.shop),
        error:state.shop.error,
        cart:state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
     return {
        onInitItems : () => dispatch(actions.getItems()),
        addCartItem : (id,amount) => dispatch(actions.addCartItem(parseInt(id),amount)),
        updateCartItem : (id,amount) => dispatch(actions.updateCartItem(parseInt(id),amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Checkout, axios));


