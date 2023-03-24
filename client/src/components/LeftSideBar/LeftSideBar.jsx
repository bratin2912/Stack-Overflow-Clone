import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe-solid.svg'
const LeftSideBar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink className='side-navlink' to='/' activeClassName='active'> 
          <p>Home</p>
        </NavLink>
        <div className='sidenav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink className='side-navlink' to='/Questions' activeClassName='active'>
            <img src={Globe} alt="Globe" width='18'/>
            <p style={{paddingLeft:'10px'}}>Questions</p>
          </NavLink>
          <NavLink className='side-navlink' to='/tags' activeClassName='active'>
            <p style={{paddingLeft:'28px'}}>Tags</p>
          </NavLink>
          <NavLink className='side-navlink' to='/users' activeClassName='active'>
            <p style={{paddingLeft:'28px'}}>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar