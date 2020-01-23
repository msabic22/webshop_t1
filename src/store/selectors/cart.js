import { createSelector } from 'reselect'


const getCart = (state) => state.items;
const getCartCount = (items) => {  

    if (items === undefined || items.length === 0) {
        return 0
    }else{
        var keys = Object.keys(items);
         
        return keys.length
    }


};
    
export default createSelector(
    getCart,
    getCartCount
)











// export const getCartCount = createSelector(
//     [getCart],
//     (cartItems) => {
//         return cartItems.length
//     }
// );


// const getVisibilityFilter = state => state.visibilityFilter
// const getTodos = state => state.todos

// export const getVisibleTodos = createSelector(
//   [getVisibilityFilter, getTodos],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//     }
//   }
// )





// const getVisibleItems = (filters, items, sortType) => {
//     let visibleItems = _.filter(
//         items,
//         item => 
//             item.price >= filters.priceMin && 
//             item.price <= filters.priceMax);
        
//     switch(sortType){
//         case 'AZ':
//                 visibleItems = _.orderBy(visibleItems, ['name'],['asc']);
//             break;
//         case 'ZA':
//                 visibleItems = _.orderBy(visibleItems, ['name'],['desc']);
//             break;
//         case 'LoHi':
//                 visibleItems = _.orderBy(visibleItems, ['price'],['asc']);
//             break;
//         case 'HiLo':
//                 visibleItems = _.orderBy(visibleItems, ['price'],['desc']);
//             break;
//         default:
//             break;
//     }
        
//     return visibleItems
// }

// export default createSelector(
//     getFilters,
//     getItems,
//     getSortType,
//     getVisibleItems
// );
