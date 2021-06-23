import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({userData, fetchUsers}) {

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            Users
            {
                userData.loading ?
                    <h1>Loading .......</h1> :
                    userData.error ? 
                        <h2>{userData.error}</h2>:(
                            <div>
                                <h1>Users List</h1>
                                {userData.data.map(user => <li key={user.id} >{user.username}</li>)}
                            </div>
                            
                        )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
