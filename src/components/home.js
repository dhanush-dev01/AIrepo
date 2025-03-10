import React, { useState } from 'react';

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
      <img src="image.jpg" alt="Home Image" />

      {/* Localize text using localization library or mechanism */}
      <p>Localized Text: "This is localized!"</p> 

      {/* Add proper accessibility attributes to button */}
      <button onClick={handleClick} accessibility="true">
        Click Me
      </button>

      {/* Extract function from JSX */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default Home;