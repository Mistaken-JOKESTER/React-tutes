import React, { Component } from 'react'
import axios from 'axios'

class HostList extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts:response.data
                })
            }) .catch(e =>{
                console.log(e)
                this.setState({errorMsg:'ErrorMsg retriving message.'})
            })
    }

    render() {

        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => {
                        return <div key={post.id} >{post.title}</div>
                    }):
                    null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default HostList
