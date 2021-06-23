const redux = require('redux')
const { createLogger } = require('redux-logger')
const CreateStore = redux.createStore
const CombineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
//action is object with type property 
//action create is a function which return aciton

function hello(value=3, next) {
    console.log('Hello', value)
    next()
}


//action creater
function buycake() {
    return { //action
        type:BUY_CAKE,
        info:'First reduct action'
    }
}

function buyIceream() {
    return {
        type:BUY_ICECREAM,
        info:'Second redux action'
    }
}

//reducer
//(prevState, action) => return newState

const initialCakeState = {
    numOfCake : 10
}

const initalIcecreamState = {
    numofIcecream : 40
}

//reducer function
const cakeReducer = (prevState = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...prevState,
            numOfCake: prevState.numOfCake - 1
        }

        default: return prevState
    }
}

//
const icecreamReducer = (prevState = initalIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...prevState,
            numofIcecream: prevState.numofIcecream - 2
        }

        default: return prevState
    }
}

//root reducer to combine all reducers
const rootReducer = CombineReducer({
    cake:cakeReducer,
    icecream:icecreamReducer
})

// const cakeStore = CreateStore(cakeReducer)
// const icecreamStore = CreateStore(icecreamReducer)
//we can use multiple middleware
const store = CreateStore(rootReducer, applyMiddleware(logger, hello))

// console.log("initial State of cake: ", cakeStore.getState())
// console.log("initial State of ice cream: ", icecreamStore.getState())
console.log("initial State of cake: ", store.getState().cake)
console.log("initial State of ice cream: ", store.getState().icecream)

// const cakeUnsubscribe = cakeStore.subscribe(() => console.log('Cake left :', cakeStore.getState()))
// const icecreamUnsubscribe = icecreamStore.subscribe(() => console.log('Icecream left :', icecreamStore.getState()))
const unsubscribe = store.subscribe(() => {})


// cakeStore.dispatch(buycake())
// icecreamStore.dispatch(buyIceream())
// cakeStore.dispatch(buycake())
// icecreamStore.dispatch(buyIceream())
// icecreamStore.dispatch(buyIceream())
// cakeStore.dispatch(buycake())
// cakeStore.dispatch(buycake())
// icecreamStore.dispatch(buyIceream())
store.dispatch(buycake())
store.dispatch(buyIceream())
store.dispatch(buyIceream())
store.dispatch(buyIceream())
store.dispatch(buycake())

// cakeUnsubscribe()
// icecreamUnsubscribe()
unsubscribe()
