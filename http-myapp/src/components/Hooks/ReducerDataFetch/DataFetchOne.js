import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetchOne() {
    const [posts, setPosts] = useState([])
    const [loading, setLodaing] = useState(true)
    const [error, setError] = useState('')

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/pots')
            .then(res =>{
                console.log(res)
                setPosts(res.data)
                setLodaing(false)
                setError('')
            })
            .catch(e => {
                console.log(e)
                setLodaing(false)
                setPosts([])
                setError(`eerror occured`)
            })
    },[])

    return (
        <div>
            {loading ? 'loading' : <h1>Title</h1>}
            {error? error: null}
            {
                posts.map(post => {
                    return <div key={post.id}>{post.title}</div>
                })
            }
        </div>
    )
}

export default DataFetchOne
