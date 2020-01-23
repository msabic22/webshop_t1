import { createSelector } from 'reselect';

const getItems = state => state.shop.items;
const getCart = state => state.cart.items;

const getCartItems = (items, cart) => {
    if(items){

        const cartItems = cart.map(cartItem => {
            return items.find(item => { 
                if(cartItem.id === item.id){
                    item.quantity = cartItem.value;
                    return item;
                }
                return null;
            })
        });

        return cartItems
    }
    else return []
}

export default createSelector(
    getItems,
    getCart,
    getCartItems
);