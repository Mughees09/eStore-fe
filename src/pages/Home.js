import React from 'react'
import '../styles/Home.css';

import CategoryList from '../components/CategoryList.js';
import ProductList from '../components/ProductList.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar';


export default function Home() {
  
  return (
    <div className='home-body'>
    <NavBar/>
    <CategoryList/>
    <ProductList/>
    
    <Footer/>
    </div>
  )
}
