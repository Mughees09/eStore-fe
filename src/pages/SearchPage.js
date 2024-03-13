import React, {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard';

export default function SearchPage() {
    const {searchedItems} = useParams();
    const [searchedProducts, setSearchedProducts] = useState([])
  

    useEffect(() => {
      const fetchSearchedResults = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:3500/api/user/searchProducts', {
            name: searchedItems, 
          });
           if(response.status === 200){
              console.log("res: ", response);
              setSearchedProducts(response.data.result);
              console.log(searchedProducts);
           } else {
            console.error("Request failed with status code " + response.status)
           }
        }catch(error){
          console.error("Request failed:", error);
        }
      };

      fetchSearchedResults();
    },[searchedItems])

    return (
    <>
    <NavBar/>
    <div className="product-container">
    <h1>Searched: {searchedItems}</h1>
    
     {searchedProducts.map( (item) => {
  
      
     return  <ProductCard key={item.id} item = {item}/>

})}
     
    </div>
    <Footer/>
    
    </>
    
  )
}
