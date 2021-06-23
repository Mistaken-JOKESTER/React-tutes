import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCream : 40
}

const iceCreamReducer = (prevState = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
                ...prevState,
                numOfIceCream: prevState.numOfIceCream - 1
            }
        default: return prevState
    }
}

export default iceCreamReducer