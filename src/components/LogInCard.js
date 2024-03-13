import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LogIn.css'; // Import the CSS for styling
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import { AiOutlineMail, AiFillLock, AiOutlineUser } from 'react-icons/ai'
import { useForm } from '../custom hooks/useForm';


export default function LoginCard({setRegister}) {
  
  const { form, handleChange } = useForm({
    email: '',
    password: '',
  });


  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect( ()=>{  setErrorMsg('') } , [form] )

 
  
  const handleLogIn = async (e)=>{
    e.preventDefault();
    console.log("form values: ", form)
    try {


            if(form.password !== form.confirmPassword){
            alert("Confirm Your Password!")
            }

          const body = {
            email: form.email,
            password: form.password,
            gender_id: form.gender,
            dob: form.birthdate,
            role_id: 2
            } 
            console.log("payload: ", body)
            const response = await axios.post('http://127.0.0.1:3500/api/user/login', 
            body 
            );
            
            
              
                
        
                  if(response.status === 200){
                    console.log("res: ", response.headers);
                    navigate("/");
                    
                  } else {
                  console.error("Request failed with status code " + response.status)
                  }
        }catch(error){
                if(!error?.response){
                  setErrorMsg("No Server Response");
                }
                else if(error.response?.status === 500){
                  setErrorMsg("No Server Response");
                }
                else if(error.response?.status === 400){
                  setErrorMsg("Missing email or password");
                }
                else if(error.response?.status === 403){
                  setErrorMsg("Incorrect email or password");
                }
                else{
                  setErrorMsg("Login Failed!");
                }
                console.log(error)
              }
        
     };
 
    
 
 
    
    
  
 
 
  
  
  
  return (
   
   <div className='login_container'>
   
    <div className="login_card" style={{ width: "18rem" }}>
    
    
        <form className="login_card-body" onSubmit={handleLogIn}>
            <h5 className="login_card-title">LOGIN</h5>
          
            
         
          

         

          <CustomInput
            icon={<AiOutlineMail />}
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <CustomInput
            icon={<AiFillLock />}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

         
          <p className="login_card-text">Forgot Password?</p>
          <p className="login_card-text">
          <CustomButton class="text-button" btnText="LOGIN" />
          </p>

          <p className="login_card-text">Don't Have an Account?</p>
            <p className="login_card-text">
            
            <CustomButton 
              class={"text-button"}  
              onClick={()=>{
                setRegister(true)
              }} 
              
              btnText={"SINUP"} />
              
             
              
            </p>
                     
              
            
           
        </form>
      </div>

    </div>
  );
}
