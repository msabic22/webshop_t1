import { combineReducers } from 'redux'
import shop from './shop'
import cart from './cart'
import auth from './auth'

export default combineReducers({
    shop,
    cart,
    auth
})