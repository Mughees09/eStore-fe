import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ProductCard.css"


export default function ProductCard({item, onClick}) {
 
    const handleClick = () => {
        if (onClick) {
          onClick(item.name); 
        }
      };


    return (

        <div onClick={handleClick}>
        <Link to={"/Products/"+item.id} className='Links'>
            <div className="product_card" style={{ width: "18rem" }}>
                <img className="product_card-img-top" src="../images/2786858.jpg" alt="Card image cap" />
               
                <div className="product_card-body">
                    <h5 className="product_card-title">{item.name}</h5>
                    <p className="product_card-text">Description: {item.description}</p>
                    <p className="product_card-text">Price: {item.original_price}</p>
                </div>
            </div>
        </Link>
        </div>
    
  )
}
