import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import '../styles/CategoryList.css';
import CategoryCard from './CategoryCard';
import axios from 'axios';


export default function CategoryList() {
  
  const [category, setCategory] = useState([])
  
  useEffect(() => {
    
    axios.get("http://127.0.0.1:3500/api/user/listCategories").then(res => {
      if (res.status === 200) {
        setCategory(res.data.result);
      
      } else {
        console.error("Request failed with status code " + res.status);
      }
    }).catch(error => {
      console.error("Request failed:", error);
    })
    

  }, [])

  function handleCategoryCardClick(categoryName) {
    // Do something when a category card is clicked, e.g., navigate to a different page.
    console.log(`Category Card clicked: ${categoryName}`);
    // Add your logic here
  }

  
  return (
      <> 
    
      <h1>Categories</h1>
      <div className="category-container">
      
       {category.map( (item) => (
        
        <CategoryCard item = {item} onClick={() => handleCategoryCardClick(item.name)}/>

       ))}
        
      </div>
      </>
    
  );
}
