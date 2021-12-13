import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Home from '../../view/Home/Home';
import Ipad from '../../view/Ipad/Ipad';
import Iphone from '../../view/Iphone/Iphone';
import Footer from '../Footer/Footer'
import Cart from '../../view/Cart/Cart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const Rutas = () => {
    return (
        <div>
        <Router>
         <NavBar />
       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Ipad" element={<Ipad />}/>
            <Route path="/Iphone" element={<Iphone />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/Cart" element={<Cart />}/>
       </Routes>
<Footer/>
    </Router>
        </div>
    )
}

export default Rutas
