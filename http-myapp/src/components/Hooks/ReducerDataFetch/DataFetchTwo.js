import axios from 'axios'
import React, {useReducer, useEffect} from 'react'

const initialState = {
    posts:[],
    loading:true,
    error:''
}

const reducer = (state, action) =>{
    console.log(state)
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                posts:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                posts:[],
                error:'error occured'
            }
        default :
            return {
                loading:false,
                posts:[],
                error:'error inside app'
            }
    }
}

function DataFetchTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log(res)
                dispatch({type:'FETCH_SUCCESS', payload:res.data})
            })
            .catch(e => {
                console.log(e)
                dispatch({type:'FETCH_ERROR'})
            })
    },[])
    
    return (
        <div>
            {state.loading ? 'loading' : <h1>Title</h1>}
            {state.error? state.error: null}
            {
                state.posts.map(post => {
                    return <div key={post.id}>{post.title}</div>
                })
            }
        </div>
    )
}

export default DataFetchTwo
