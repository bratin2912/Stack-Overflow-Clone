import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import searchlogo from "../../assets/searchlogo.svg";
import Avatar from '../Avatar/Avatar';
import "./Navbar.css";
const Navbar = () => {
  let User=null
  return (
    <nav>
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
            <Link><Avatar>M</Avatar></Link>
            <Link  to="/Auth"><button className='nav-item nav-link'>Log out</button></Link>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar