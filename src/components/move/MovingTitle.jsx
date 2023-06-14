import React, { useEffect, useState } from 'react';
import './MovingTitle.css';

const MovingTitle = () => {
  const [position, setPosition] = useState(-100); // Initial position off the screen

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1); // Move title by 1 pixel to the right
    }, 10);

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, []);

  return <h1 className="moving-title" style={{ transform: `translateX(${position}px)` }}>Ghassan Hasan : Front-End-Web-Developer : React.js - Angular - JavaScript - TypeScript - SQL - MySQL - HTML - CSS</h1>;
};

export default MovingTitle;
