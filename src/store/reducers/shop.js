import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: null,
    error : false,
    filters : {
        priceMin : 0,
        priceMax : 99999,
    },
    sortType: 'LoHi',
    category: 'SVE',
    searchKeyword: ''
};

const setFilterPrice = (state, action) => {
    return {
        ...state,
        filters: {
            ...state.filters,
            priceMin: action.min,
            priceMax: action.max,
        }
    }
}

const sort = (state, action) => {
    return {
        ...state,
        sortType: action.sortType
    }
}

const category = (state, action) => {
    return {
        ...state,
        category: action.category
    }
}


const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case actionTypes.FETCH_ITEMS:
            return{
                ...state,
                items: action.items,
            };
        case actionTypes.FETCH_ITEMS_FAILED:
            return{
                ...state,
                error:false,
            };
        case actionTypes.FILTER_PRICE_SET:
            return setFilterPrice(state, action)
            
        case actionTypes.SORT_TYPE_UPDATED:
            return sort(state, action)
            
        case actionTypes.CATEGORY_UPDATED:
            return category(state, action)

        case actionTypes.UPDATED_SEARCH_KEYWORD:
            return{
                ...state,
                searchKeyword: action.keyword
            }
            
        default:
            return state;
    }
};



export default reducer;