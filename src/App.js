import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home.js";
import About from "./pages/About";
import Authentication from "./pages/Authentication.js";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails.js";
import './styles/App.css';
import SearchPage from "./pages/SearchPage.js";
import Cart from "./pages/Cart.js";

function App() {
  return (
     
    <>

    
    
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authenticate" element={<Authentication/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:categoryName" element={<Home />} />
          <Route path="/products/:productName" element={<ProductDetails />} />
          <Route path = "/search/:searchedItems" element={<SearchPage/>}/>
          <Route path="/cart" element= {<Cart/>}/>
      </Routes>
    
    
   
    
    </>
  );
}

export default App;
