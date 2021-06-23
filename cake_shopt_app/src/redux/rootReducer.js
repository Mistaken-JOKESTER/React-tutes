import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import sweetsReducer from './sweets/sweetsReducer'

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer,
    sweets: sweetsReducer
})

export default rootReducer