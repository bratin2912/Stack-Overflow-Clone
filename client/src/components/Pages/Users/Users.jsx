import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Users.css'
import UserList from './UserList'
import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import { fetchAllUsers } from '../../../redux/actions/users'
const Users = () => {
  const location=useLocation();
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchAllUsers())
  })
  return (
    <div className="home-container1">
      <LeftSideBar/>
      <div className="home-container2">
        <h1 style={{fontWeight:'400',marginTop:'0px'}}>Users</h1>
        <UserList/>
      </div>
    </div>
  )
}

export default Users