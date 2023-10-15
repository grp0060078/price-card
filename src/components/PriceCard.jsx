
import React from 'react'

const PriceCard = ({ title, price, features,button }) => {

  return (
    < div className='PriceCard'>
    <div className="price-card">
      <h2 >{title}</h2>
      <h3 >${price} / month</h3>
      <ul type="none">
        {features.map((feature, index) => (
          <li key={index}>{feature} </li>
        ))}
      </ul>
      <button>{button}</button>
    </div>
   
    </div>
    
  );

  
};

export default PriceCard;