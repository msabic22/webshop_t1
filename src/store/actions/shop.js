import * as actionTypes from './actionTypes';
import axios from '../../axios-items';

export const fetchItems = ( items ) => {
    return {
        type: actionTypes.FETCH_ITEMS,
        items: items
    };
};

export const fetchItemsFailed = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAILED
    };
};

// TIP OVAKO RADIS ASYNC REQUESTOVE
export const getItems = () => {
    return dispatch => {
        axios.get( '/products.json' )
            .then( response => {
                dispatch(fetchItems(response.data));
            } )
            .catch( error => {
                console.log('error');
                dispatch(fetchItemsFailed());
            } );
    };
};

export const setFilterPrice = ( min, max ) => {
    
    if(min === '') min = 0;
    if(max === '') max = 999999;

    return {
        type: actionTypes.FILTER_PRICE_SET,
        min : min,
        max : max
    };
};

export const setSortType = (sortType) => {
    return{
        type: actionTypes.SORT_TYPE_UPDATED,
        sortType : sortType
    }
}

export const setCategory = (category) => {
    return{
        type: actionTypes.CATEGORY_UPDATED,
        category : category
    }
}

export const setSearchKeyword = (keyword) => {
    return{
        type: actionTypes.UPDATED_SEARCH_KEYWORD,
        keyword : keyword
    }
}


