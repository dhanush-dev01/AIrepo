import React from 'react';
import { useState } from 'react';

import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("Clicked!");
  }

  return (
    <div className="home">
      <h1>Home</h1>
      
      <p>Welcome to the Home page.</p>

      <img src="image.jpg" alt="Home image" /> 

      <p>Localized Text: </p> 

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Home;