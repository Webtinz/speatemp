import React, { useState } from 'react';
import './bouton.css';

const CustomButton = ({ onChange }) => {
    const [isMonthly, setIsMonthly] = useState(true); // 'Month' est la valeur par défaut
  
    const handleToggle = () => {
      const newState = !isMonthly;
      setIsMonthly(newState);
      onChange(newState ? 'month' : 'year'); // Appeler la fonction onChange avec la nouvelle option
    };
  
    return (
      <div className="custom-toggle-container">
        <button 
          onClick={handleToggle} 
          className={`toggle-button ${isMonthly ? 'active' : ''}`}
        >
          Month
        </button>
        <button 
          onClick={handleToggle} 
          className={`toggle-button ${!isMonthly ? 'active' : ''}`}
        >
          Year
        </button>
      </div>
    );
  };
  
  export default CustomButton;