import React from 'react';
import './ButtonSecondary.css';

function ButtonSecondary({ name, type, onClick }) {
  return (
    <div>
      <button className="buttonSecondary" type={type} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default ButtonSecondary;
