import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components/App.css';



const PriceCard = ({ title, price, features,button }) => {
    console.log(title)
    return (
      < div className='PriceCard'>
      <div className="price-card">
        <h2 >{title}</h2>
  
        <h3 >${price}/month</h3>
        <ul type="none">
          {features.map((feature,value) => (
            <li key={value}>{feature} </li>
          ))}
        </ul>
        <button>{button}</button>
      </div>
     
      </div>
      
    );
  
    
  };



ReactDOM.createRoot(document.getElementById('root')).render(<App PriceCard={PriceCard}/>)
  
// react
