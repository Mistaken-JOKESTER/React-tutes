import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic:'vue'
        }
    }
    
    usernameHandler = event =>{
        this.setState({
            username: event.target.value
        })
    }

    commentHandler = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    selectHandler = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = event =>{
        alert(`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form>
               <div>
                    <label>UserName</label>
                    <input type='text' 
                        value={this.state.username} 
                        onChange={this.usernameHandler} 
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={this.state.comments} 
                        onChange={this.commentHandler} 
                    ></textarea>
                </div> 
                <div>
                    <label>Engine</label>
                    <select 
                        value={this.state.topic}
                        onChange={this.selectHandler}
                    >
                        <option value='react'>react</option>
                        <option value='vue'>vue</option>
                        <option value='angular'>angular</option>
                    </select>
                </div>
                <button type='submit' onClick={this.submitHandler}>Submit</button>
            </form>
        )
    }
}

export default Form
