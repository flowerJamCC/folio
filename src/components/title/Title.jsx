import React from 'react';
import './title.css';

const Title = ({title_name,}) => {
  return (
    <>
    <h2 className='dynamic-title'>{title_name}</h2>
    </>
  );
};

export default Title;