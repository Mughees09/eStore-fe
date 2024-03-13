import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';
import axios from 'axios';
import ProductDetails from '../pages/ProductDetails';




export default function ProductList() {


  
  const {categoryName} = useParams();
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    axios.get("http://127.0.0.1:3500/api/user/listProducts").then(res => {
      console.log("res: ",res)
      if (res.status === 200) {
        setProducts(res.data.result);
        setFilteredProducts(res.data.result);
        console.log(products)
      } else {
        console.error("Request failed with status code " + res.status);
      }
    }).catch(error => {
      console.error("Request failed:", error);
    })
    // filteredProducts=products;
    // console.log(filteredProducts)
    
  }, [])
  
  useEffect(() => {
   
      setFilteredProducts(products.filter(item => {
        return ((categoryName === item.category.name));
     
    }));
  
    
    // Filter products based on category and set filteredProducts
   
  }, [categoryName]);
console.log({products})


function handleProductCardClick(productName) {
 
  console.log(`Product Card Clicked Name: ${productName}`);
  
 
}

  return (
    <> 
    
    <h1>{categoryName} Products</h1>
    <div className="product-container">
    
     {filteredProducts.map( (item) => {
  
      
     return  <ProductCard key={item.id} item = {item} onClick= {(name) => handleProductCardClick(name)}/>

})}
     
    </div>
    </>
  )
}
