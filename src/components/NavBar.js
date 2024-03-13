import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import "../styles/NavBar.css";
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';



export default function NavBar() {

  const [searchedItems, setSearchedItems] = useState("");
  const navigate = useNavigate();
  const goToSearchPage = () => {
    navigate(`/search/${searchedItems}`);
    setSearchedItems('')
  }
 

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="../images/App Logo.jpg" alt="eStore" className="logo-image" />
        </Link>
        <Link className='store-name' to="/">eStore</Link>
      </div>
      
      <ul className="nav-links">
        <li>
        <div className="search-bar">
         <p className='search-button-container'>
         <CustomInput value= {searchedItems} type={'text'} placeholder={'Search'} onChange={(e) => {setSearchedItems(e.target.value)}}/>
         
         <CustomButton class={"search-button"} type= {'submit'} btnText={"Search"} onClick={()=>{
              goToSearchPage()
          }}/>
          </p>
        </div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/authenticate" >LogIn / Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
       
        <Link to="/cart">Cart</Link>
        
        </li>
      </ul>
    </nav>
  )
}
