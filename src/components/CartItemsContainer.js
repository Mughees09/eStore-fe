import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';
import CustomButton from '../components/CustomButton';
import "../styles/CartItemsContainer.css";

export default function CartItemsContainer() {
  const cartItem = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();

 
  let grandTotal = [];
  

  return (
    <>
    <h1 className="cart-items-container-heading">Cart</h1>
        <div className="cart-items-container">
            {cartItem.map((item) => (
                <div key={item.id} className="cart-item-card">
                <img className="cart-item-image" src="../images/2786858.jpg" alt="Card image cap" />
                <div className="cart-item-details">
                    <h5 className="cart-item-title">{item.name}</h5>
                    <p className="cart-item-text">Description: {item.description}</p>
                    <p className="cart-item-text">Orignal Price: {item.original_price}</p>
                    <p className="cart-item-text">Discount: {item.discount_type} {" "} {item.discount_value}  </p>
                    <p className="cart-item-text">Product Total Price:
                                                
                    {(() => {
                        let priceAfterDiscount;
                        let productTotalPrice;
                        let quantity = item.quantity;
                        if (item.discount_type === "flat") {
                            priceAfterDiscount = item.original_price - item.discount_value;
                            productTotalPrice = priceAfterDiscount * quantity;
                            grandTotal.push({...item,priceAfterDiscount,productTotalPrice})
                            
                        }else{
                            const discountPercentage = parseFloat(item.discount_value);
                            if (!isNaN(discountPercentage) && discountPercentage >= 0 && discountPercentage <= 100) {
                                // Ensure discountPercentage is a valid number between 0 and 100
                                priceAfterDiscount=  item.original_price - (item.original_price * discountPercentage) / 100;
                                productTotalPrice = priceAfterDiscount * quantity;
                                grandTotal.push({...item,priceAfterDiscount,productTotalPrice})
                               

                            } else {
                                // Handle invalid percentage value
                                console.error("Invalid percentage discount value:", item.discount_value);
                            }
                        }
                        return  productTotalPrice;
                    })()}               
                    
                    </p>
                    
                    <p className="cart-item-quantity">
                        Quantity:{" "}
                        <CustomButton btnText=" - " onClick={() => dispatch(decrementQuantity(item.id))} />{"   "}
                        <span className="quantity-count">{item.quantity}</span>{"   "}
                        <CustomButton btnText="+" onClick={() => dispatch(incrementQuantity(item.id))} />
                    </p>
                    <CustomButton class="remove-from-cart-button" btnText="Remove" onClick={() => dispatch(removeFromCart(item.id))} />
                </div>
                </div>
            ))}
        </div>
    
                    
        <h1 className="cart-total-amount-container-heading">Total Amount Payable</h1>    
        <div className="cart-total-amount-container">
                              
                
                
                {grandTotal.map((item) => (
                    <>
                    
                    
                    <div key= {item.id} className="cart-total-amount-card">
                    <div className="cart-total-amount-details">
                        <h5 className="cart-total-amount-title">Product: {item.name}</h5>
                        <p className="cart-total-amount-text">Discounted Price: {item.priceAfterDiscount}</p>
                        <p className="cart-total-amount-text">Quantity: {item.quantity}</p>
                        <p className="cart-total-amount-text">Product Total Price: {item.productTotalPrice}</p>
                        


                    </div>
                    </div>
                       
                    </>
                ))}
                 <div className="cart-total-amount-card">
                    <div className="cart-total-amount-details">
                        <h5 className="cart-total-amount-title">Total:</h5>
                        <p className="cart-total-amount-text">  
                        {(() => {
                        
                     
                        let totalAmountPayable = grandTotal.reduce((sum,item) =>{return sum= sum+ item.productTotalPrice},0)
                        
                        return  totalAmountPayable;
                    })()}
                    </p>
                    <p className='checkout-button-container'>
                    <CustomButton class="checkout-button" btnText="Checkout"  />
                    </p>    
                    </div>
                    </div>
        </div>
               
    </>
  );
}
