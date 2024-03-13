import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import SignUpCard from '../components/SignUpCard';
import LogInCard from '../components/LogInCard';
import Footer from '../components/Footer';
import axios from 'axios';
import "../styles/Authentication.css";

export default function Authentication(user) {


  const [register, setRegister] = useState(false);
  console.log("isAuthenticated: ",register);

  return (
   <body className= "auth-body">
    
    
    
    { register ?  <SignUpCard/>:  <LogInCard setRegister = {setRegister}/>}
    
    
    
    <Footer/>
   </body>
  )
}
