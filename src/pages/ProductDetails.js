import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductDetails.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice'; 


export default function ProductDetails({item}) {

  console.log("item: ",item)
  const {productName} = useParams();
  
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  
  const addToCartHandler = (e) => {
    console.log("sending this item to cart: ",cartItem)
    dispatch(addToCart(cartItem))
    
  }
  
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3500/api/user/getProductById?id=${productName}`);
        if (response.status === 200) {
          console.log("res: ", response);
          setProductDetails(response.data.result);
          setCartItem(response.data.result)
          console.log(productDetails);
        } else {
          console.error("Request failed with status code " + response.status);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    };
  
    fetchProductDetails();
  }, []);
  
  const productImages = ["../images/2786858.jpg","../images/Akatsuki.jpg","../images/Black_hole.jpg","../images/gambit_logo_wallpaper__no_text__by_1337ninjasakura_dcejdsv.png"]

  return (
    <>
    <NavBar/>
    
      <div className="product-container">
      <h1 className='product-container-heading'> {productDetails.name}  Details</h1>
        <div className="image-container">
         
          <img src={productImages[0]} alt={productDetails.name} className="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{`${productDetails.category?.name}: ${productDetails.name}`}</h1>
          <hr className="divider" />
          <p className="product-description">{productDetails.description}</p>
          <hr className="divider" />
          <p className="product-price">Rs.{productDetails.original_price}</p>
          
          <CustomButton class={"add-to-cart-button"} btnText={"Add To Cart"} onClick={addToCartHandler}/>
          
        </div>
      </div>

    <Footer/>
    </>
  )
}
