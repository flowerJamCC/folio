import React from 'react';
import './button.css';

const Button = ({button_text}) => {
  return (
    <button className='gen-button'>{button_text}</button>
  )
}

export default Button;