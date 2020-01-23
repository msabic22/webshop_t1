import { createSelector } from 'reselect'
import _ from 'lodash';

const getFilters = (state) => state.filters;
const getItems = state => state.items;
const getSortType = state => state.sortType;
const getCategories = state => state.category;
const getKeyword = state => state.searchKeyword;


const getVisibleItems = (filters, items, sortType, category, keyword) => {

    let visibleItems = _.filter(
        items,
        item => 

            (item.cat1 === category || item.cat2 === category || category === 'SVE') &&
            item.price >= filters.priceMin && 
            item.price <= filters.priceMax &&
            item.name.includes(keyword))
        
    switch(sortType){
        case 'AZ':
                visibleItems = _.orderBy(visibleItems, ['name'],['asc']);
            break;
        case 'ZA':
                visibleItems = _.orderBy(visibleItems, ['name'],['desc']);
            break;
        case 'LoHi':
                visibleItems = _.orderBy(visibleItems, ['price'],['asc']);
            break;
        case 'HiLo':
                visibleItems = _.orderBy(visibleItems, ['price'],['desc']);
            break;
        default:
            break;
    }

    return visibleItems
}

export default createSelector(
    getFilters,
    getItems,
    getSortType,
    getCategories,
    getKeyword,
    getVisibleItems
);
