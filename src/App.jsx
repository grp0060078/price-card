
import React from 'react';
import './components/App.css';

import PriceCard from './components/Pricecard';

function App() {
  
  return (
    
    <div className="App">
      <h1>React Price Card Task</h1>
      <h4>Reproduce this user interface using a React.js application with JSX. 
        Write the code in a dynamic manner.</h4>
      
    
      <div className="PriceCard">
      <div className="price-cards">
    
        <PriceCard
        
          title="FREE"
          price="0"
          features={['✅Single User', '✅50GB Storage', '✅Unlimited Public projects','✅Community Access',
          '❎Unlimited Private Projects','❎Deidcated Phone Support','❎Free Subdomain','❎Monthly Status Reports']}
          button="Button"
        />
        
        
        <PriceCard
          title="PLUS"
          price="9"
          features={['✅Single User', '✅50GB Storage', '✅Unlimited Public projects','✅Community Access',
          '✅Unlimited Private Projects','✅Deidcated Phone Support','✅Free Subdomain','❎Monthly Status Reports']}
          button="Button"
       />
       
        <PriceCard
          title="PRO"
          price="49"
          features={['✅Single User', '✅50GB Storage', '✅Unlimited Public projects','✅Community Access',
          '✅Unlimited Private Projects','✅Deidcated Phone Support','✅Free Subdomain','✅Monthly Status Reports']}
          button="Button"
       />
     
    </div>
    </div>
    </div>
  );
 
}

export default App;
