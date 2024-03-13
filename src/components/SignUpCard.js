import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import '../styles/SignUp.css'; // Import the CSS for styling
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import CustomDateSelector from './CustomDateSelector';
import CustomDropDown from './CustomDropDown';
import { AiOutlineMail, AiFillLock, AiOutlineUser, AiFillCalendar } from 'react-icons/ai'
import { useForm } from '../custom hooks/useForm';




export default function SignUpCard() {

  let result;
  

  const { form, handleChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Select Gender', // Default gender value
    birthdate: new Date(), // Default birthdate value
  });


  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
 
  useEffect( () => setErrorMsg('') , [form]);


  const handleSignUp = async (e)=>{
   e.preventDefault();
   console.log("form values: ", form)

   if(form.password !== form.confirmPassword){
    alert("Confirm Your Password!")
   }
  
  try {
   const body = {
    name: `${form.firstName} ${form.lastName}`,
    email: form.email,
    password: form.password,
    gender_id: parseInt(form.gender),
    dob: form.birthdate,
    role_id: 2
   } 

   console.log("Payload: ", body)
   const response = await axios.post('http://127.0.0.1:3500/api/user/register', 
   body 
   );
   console.log("res: ", response)
   navigate("/");
  
  }catch(error){
    if (!error?.response){
      setErrorMsg('No Server Response');
    }else if(error.response.status === 400){
      setErrorMsg(error.response.data.errMsg);
    }else{
      setErrorMsg('Registration Failed');
    }
  }
};

    


  return (
    <div className='signup_container'>
    <div className="signup_card" style={{ width: "18rem" }}>
      <div className="signup_card-body">
        <h5 className="signup_card-title">SignUp</h5>
        
        <form onSubmit={handleSignUp}>
          <CustomInput
            icon={<AiOutlineUser />}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />

          <CustomInput
            icon={<AiOutlineUser />}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />

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

          <CustomInput
            icon={<AiFillLock />}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <CustomDropDown
            name= "gender"
            options={
             [ { value: 1, label: 'Male' },
              { value: 2, label: 'Female' },
              { value: 3, label: 'Other' },]
            }
            value={form.gender}
            onChange={handleChange}
          />

          <CustomDateSelector
            icon={<AiFillCalendar />}
            type="date"
            name="birthdate"
            placeholder="mm/dd/yy"
            value={form.birthdate}
            onChange={handleChange}
          />

          <CustomButton class="text-button" btnText="SIGNUP" />
        </form>
      </div>
    </div>
  </div>
  );
}
