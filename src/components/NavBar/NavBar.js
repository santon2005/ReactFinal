import React from 'react';
//import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
      <nav className='Navegacion'>
        <ul className='ul'>
          <Link to="/" className='a'>HOME</Link>
          <Link to="/Iphone"  className='a'>IPHONE</Link>
          <Link to="/About"  className='a'>ABOUT</Link>
          <Link to="/cart"  className='a'><CartWidget/></Link>
        </ul>
      </nav>  
    );
  }

export default NavBar;