import * as actionTypes from '../actions/actionTypes';

const cart = {
    items:[                                                         //FIX: kad se postave vrijednosti i udje ravno u /store nesto brejka
    ]
}


const cartReducer = (state = cart, action) => {
    switch(action.type) {   

        case actionTypes.ADDED_ITEM_TO_CART:
            return{
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            }

        case actionTypes.UPDATED_ITEM_IN_CART:
            return{
                ...state,
                items:state.items.map(item =>{
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            value : item.value + action.payload.value
                        }
                    }
                    else return item
                })
            }

        default:
            return state;
    }
};

export default cartReducer;