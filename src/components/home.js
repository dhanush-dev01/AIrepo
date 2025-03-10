import React, { useState } from 'react';

import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button clicked!");
    alert("Clicked!");
  }

  return (
    <div className="home">
      <h1>Home</h1>
      
      {/* Use CSS file instead of inline style */}
      <p style={{ color: 'red', fontSize: '20px' }}>Welcome to the Home page.</p>

      {/* Add 'alt' attribute for accessibility */}
      <img src="image.jpg" alt="Home image" />

      {/* Localize text using a translation function */}
      <p>Localised Text: {() => "This is localized!"}</p> 

      {/* Provide proper accessibility attributes to the button */}
      <button onClick={handleClick}>Click Me</button>

      {/* Extract inline function in JSX */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

    </div>
  );
}

export default Home;