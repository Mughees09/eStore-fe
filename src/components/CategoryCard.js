import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/CategoryCard.css"

export default function CategoryCard({item,onClick}) {

  const handleClick = () => {
    if (onClick) {
      onClick(item.name); // Pass the category name to the parent component's handler
    }
  };
  
  console.log(item.image);
  return (
    
        <div className="category_card-body" onClick={handleClick}>
        <Link  to={"/Category/"+item.name} className='Links'>
                  <img className="category_card" src="../images/ASSASSINS_CREED_Syndicate_action_adventure_fantasy_warrior_stealth_fighting_1acs_3840x2160.jpg" alt="Card image cap" />
                  <h5 className="category_card-title">{item.name}</h5>
                      
        </Link>
        </div>
    
  )
}
