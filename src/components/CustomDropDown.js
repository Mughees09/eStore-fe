import React from 'react';
import '../styles/CustomDropDown.css'; // Import the CSS for styling

export default function CustomDropDown({ name, options, value, onChange }) {
  return (
    <div className="custom-dropdown">
      <div className='text-bar'>
        <label>Gender</label>
         
        <select id="genderSelector" onChange={(e) => onChange({ target: { name, value: e.target.value } })}>
          {options.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
