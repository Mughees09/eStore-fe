import React from 'react';
import DatePicker from 'react-datepicker'; // You may need to install and import a date picker library
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling

export default function CustomDateSelector({ ...props }) {
  return (
    <div className="custom-date-selector">
     <div className='text-bar'>
            {props.icon &&
               <div className="input_icon">
                    {props.icon}
                </div>
            }
     <input
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />
      </div>
    </div>
  );
}
