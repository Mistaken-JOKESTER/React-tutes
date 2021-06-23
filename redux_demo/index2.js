const redux = require('redux')
const axios = require('axios')
const redux_thunk = require('redux-thunk').default
const logger = require('redux-logger').createLogger()

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const intialState = {
    loading:true,
    data:[],
    error:''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

function fetchingUsers(){
    return {
        type:FETCH_USERS_REQUEST
    }
}

function fetchSuccessfull(users){
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

function fetchFailed(error){
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer = (prevState = intialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:{
            return{
                ...prevState,
                loading: true
            }
        }
        case FETCH_USERS_SUCCESS:{
            return {
                loading:false,
                data: action.payload,
                error: ''
            }
        }
        case FETCH_USERS_FAILURE:{
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        }
        default: return prevState
    }
} 

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchingUsers)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetchSuccessfull(users))
            }).catch(e => {
                console.log(e)
                dispatch(fetchFailed(e.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(redux_thunk))
const unsubscribe = store.subscribe(() => {console.log(store.getState()) })
store.dispatch(fetchUsers())