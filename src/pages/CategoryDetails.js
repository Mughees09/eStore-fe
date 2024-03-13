import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/ProductCard.css"

export default function CategoryDetails({}) {
    
    const {categoryName} = useParams();
    //const [categoryDetails, setCategoryDetails] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log("Current Location: ",window.location.pathname);
    console.log("Location Got: ",categoryName);
    
    
    useEffect(() => {
        
        axios.get("http://127.0.0.1:3500/api/user/listProducts").then(res => {
            if (res.status === 200) {
                setProducts(res.data.result);
                
            } else {
                console.error("Request failed with status code " + res.status);
            }
        }).catch(error => {
            console.error("Request failed:", error);
        })
        
        
    }, [])
    
    
    
    // Filter products based on category and render them

    useEffect(() => {
      // Filter products based on category and set filteredProducts
      setFilteredProducts(products.filter(item => {
        
          return ((categoryName === item.category.name));
       
       
       
      }));
    }, [categoryName, products]);

    console.log("Category Name: ",categoryName);
    console.log("Products: ", products);

    console.log("Filtered Products: ",filteredProducts);


  return (
    <div>
    <h1>Category Details Page for {categoryName}</h1>
    {filteredProducts.map((item) => (
      <Link to={"/Products/" + item.category.name + item.brand.name + item.name + item.model.name} className='Links' key={item.id}>
        <div className="product_card" style={{ width: "18rem" }}>
          <img className="product_card-img-top" src="../images/2786858.jpg" alt="Card image cap" />

          <div className="product_card-body">
            <h5 className="product_card-title">{item.name}</h5>
            <p className="product_card-text">Description: {item.description}</p>
            <p className="product_card-text">Price: {item.original_price}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
}
