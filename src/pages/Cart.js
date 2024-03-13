import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CartItemsContainer from '../components/CartItemsContainer'


export default function Cart() {
  return (
    <div>
    <NavBar/>
   
    <CartItemsContainer/>
    <Footer/>
    </div>
  )
}
