import React from 'react';
import './ButtonPrimary.css';

function ButtonPrimary({ name, type, onClick }) {
  return (
    <div>
      <button className="buttonPrimary" onClick={onClick} type={type}>
        {name}
      </button>
    </div>
  );
}

export default ButtonPrimary;
