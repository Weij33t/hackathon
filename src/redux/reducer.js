import { combineReducers } from 'redux'
import shopReducer from './Shop/reducer.js'
import userReducer from './User/reducer.js'

export default combineReducers({
  user: userReducer,
  shop: shopReducer,
})
