import React, {Component} from 'react';

import { connect } from 'react-redux';
import cartItems from '../../store/selectors/cartItems'

import CartItem from '../../components/CartItem/CartItem';
import Container from 'react-bootstrap/Container';

class Cart extends Component{
    state = {

    }
    mapItems = (items) => {
        if(items.length === 0) return 'cart empty'                                                  // TODO: Cart empty screen
        return Object.keys(items)
                .map( key => {

                    const image = require('../../assets/images/items/' + items[key].img_path)
                    console.log(image)

                    return <CartItem 
                        key={key}
                        name={items[key].name} 
                        price={items[key].price.toFixed(2)}
                        description={items[key].description}
                        path={image}
                        quantity={items[key].quantity}/>
                })
    }

    render () {
        let itemsArray = null;
        if(this.props.items){
            itemsArray = this.mapItems(this.props.items);   
        }
    
        return(
            <Container columns={1}>{itemsArray}</Container>     
        );
    }
}

const mapStateToProps = state => {
    return {
        items : cartItems(state)
    }
}

const mapDispatchToProps = dispatch => {
     return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
