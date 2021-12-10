import React from 'react';
//import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <nav className='Navegacion'>
        <ul className='ul'>
          <Link to="/" className='a'>HOME</Link>
          <Link to="/Ipad"  className='a'>IPAD</Link>
          <Link to="/Iphone"  className='a'>IPHONE</Link>
          <Link to="/Cart"  className='a'>CART</Link>
        </ul>
      </nav>  
    );
  }

export default NavBar;