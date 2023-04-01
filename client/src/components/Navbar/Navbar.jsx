import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import searchlogo from "../../assets/searchlogo.svg";
import Avatar from '../Avatar/Avatar';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUserReducer } from '../../redux/reducer/currentUser';
import "./Navbar.css";
import { currentUser } from '../../redux/actions/currentUser';
const Navbar = () => {
  const dispatch=useDispatch();
  let User=useSelector(state=>state.currentUserReducer);
  useEffect(()=>{
    dispatch(currentUser(JSON.parse(localStorage.getItem('profile'))))
  },[])
  
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to="/" className='nav-item nav-logo'>
          <img src={logo} alt="Stack Overflow Logo"/>
        </Link>
        <Link to="/" className='nav-item nav-btn'>About</Link>
        <Link to="/" className='nav-item nav-btn'>Products</Link>
        <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type="text" placeholder='Search...'/>
          <img src={searchlogo} alt="Search Logo" width="18" className='search-icon'/>
        </form>
        {User===null?
          <Link  to="/Auth"><button className='nav-item nav-link'>Log in</button></Link>:
          <>
            <Avatar backgroundColor="#009dff" px="10px" py="3px" borderRadius="50%" color="white" fontSize="19px"><Link to='user' style={{textDecoration:"none",color:"white"}}>{User.result.name[0]}</Link></Avatar>
            <Link  to="/Auth"><button className='nav-item nav-link'>Log out</button></Link>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar