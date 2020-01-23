import * as actionTypes from './actionTypes';

export const addCartItem = (id, value) => {

    return {
        type: actionTypes.ADDED_ITEM_TO_CART,
        payload:{
            id: id,
            value: value 
        }
    };
};

export const updateCartItem = (id, value) => {

    return {
        type: actionTypes.UPDATED_ITEM_IN_CART,
        payload:{
            id: id,
            value: value 
        }
    };
};
