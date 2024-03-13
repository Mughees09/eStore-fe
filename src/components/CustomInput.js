import React, {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import '../styles/CustomInput.css'; // Import the CSS for styling

export default function CustomInput({ ...props }) {
    
    const [showPassword, setShowPassword] = useState(false)
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
  
  
    return (
        <>
            <div className="input_wrapp">
                <div className='text-bar'>
                    {props.icon &&
                        <div className="input_icon">
                            {props.icon}
                        </div>
                    }

                    <input
                        type={showPassword ? 'text' : props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />
                    {
                        props.type === 'password' && (
                            <div className="input_icon" onClick={handleTogglePassword}>
                                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
  )
}
