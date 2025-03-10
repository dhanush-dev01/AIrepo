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
      
      {/* Use CSS file instead of inline style */}
      <p>Welcome to the Home page.</p>

      {/* Add 'alt' attribute for accessibility */}
      <img src="image.jpg" alt="Home image" />

      {/* Localize text using i18n library or a similar method */}
      <p>Localized Text: </p> 

      {/* Add proper accessibility attributes to button */}
      <button onClick={handleClick} accessibilityLabel="Click me">Click Me</button>

      {/* Extract function in a separate variable for better code readability */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Home;