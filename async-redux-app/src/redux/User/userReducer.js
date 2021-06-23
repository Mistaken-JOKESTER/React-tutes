import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const intialState = {
    loading:true,
    data:[],
    error:''
}

const userReducer = (prevState = intialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:{
            return{
                ...prevState,
                loading: true
            }
        }
        case FETCH_USER_SUCCESS:{
            return {
                loading:false,
                data: action.payload,
                error: ''
            }
        }
        case FETCH_USER_FAIL:{
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        }
        default: return prevState
    }
} 

export default userReducer