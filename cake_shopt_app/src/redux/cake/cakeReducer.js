import {BUY_CAKE} from './cakeTypes'

const initialState = {
    numOfCakes: 20
}

const cakeReducer = (prevState = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...prevState,
            numOfCakes: prevState.numOfCakes - action.payload
        }
        default: return prevState
    }
}

export default cakeReducer