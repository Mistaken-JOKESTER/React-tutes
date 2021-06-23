import { BUY_SWEETS } from "./sweetsTypes"

const initialState = {
    numOfSweets: 30
}

const sweetsReducer = (prevState = initialState, action) => {
    switch(action.type){
        case BUY_SWEETS: return {
            ...prevState,
            numOfSweets : prevState.numOfSweets - 1 
        }

        default: return prevState
    }
}

export default sweetsReducer