import React from 'react'
import { useSelector } from 'react-redux'
import { usersReducer } from '../../../redux/reducer/users'
import User from './User';

const UserList = () => {
    const users = useSelector(state => state.usersReducer);
    console.log(users);
    return (
        <div className="userlist-container">
            {
                users.map(user=>{
                    return <User key={user?._id} user={user}/>
                })
            }
        </div>
    )
}

export default UserList