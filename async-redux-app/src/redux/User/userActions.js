import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchSuccessfull = (users) => {
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchFailed = (error) => {
    return {
        type:FETCH_USER_FAIL,
        payload:error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data
                dispatch(fetchSuccessfull(users))
            }) .catch(e => {
                const errorMsg = e.message
                dispatch(fetchFailed(errorMsg))
            })
    }
}