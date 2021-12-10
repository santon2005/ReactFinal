import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from './view/Home/Home';
import Ipad from './view/Ipad/Ipad';
import Iphone from './view/Iphone/Iphone';
import DetailProduct from './view/DetailProduct/DetailProduct'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
         <NavBar />
       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Ipad" element={<Ipad />}/>
            <Route path="/Iphone" element={<Iphone />}/>
            <Route path="/DetailProduct" element={<DetailProduct />}/>
       </Routes>
       <Footer/>
       </div>
    </Router>
  );
}

export default App;
