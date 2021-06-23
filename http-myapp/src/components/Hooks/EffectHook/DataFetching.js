import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState('')

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(e => {
                console.log(e)
            })

        return () =>{
            setPost({})
        }
    },[id])

    return (
        <div>
            <input 
                placeholder='id' 
                value={id} 
                type='number' 
                onChange={e => setId(e.target.value)} 
            />
            <div>
                {post.title}
            </div>            
        </div>
    )
}

export default DataFetching
