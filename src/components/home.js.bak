import React, { useState } from 'react';

import './Home.css';

const Home = () => {
  const UnusedVar = "I am not used anywhere"; // ❌ Unused variable

  const password = "12345"; // ❌ Hardcoded password (Security issue)

  let x = 10; // ❌ Poorly named variable (bad readability)

  console.log("Debug: Home component loaded"); // ❌ Debugging log should be removed in production

  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Button clicked!"); // ❌ Debugging log
    alert("Clicked!"); // ❌ Alerts should be avoided
  }

  return (
    <div className="home">
      <h1>Home</h1>
      
      {/* ❌ Inline style instead of using CSS file */}
      <p style={{ color: 'red', fontSize: '20px' }}>Welcome to the Home page.</p>

      {/* ❌ Missing 'alt' attribute (accessibility issue) */}
      <img src="image.jpg" />

      {/* ❌ Hardcoded text that should be localized */}
      <p>Hardcoded Text: "This is not localized!"</p> 

      {/* ❌ Button without proper accessibility attributes */}
      <button onClick={handleClick} style={{ backgroundColor: 'blue' }}>
        Click Me
      </button>

      {/* ❌ Unnecessary inline function in JSX (should be extracted) */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* ❌ Unused variable `x` */}
      <p>Value of x: {x}</p>
    </div>
  );
}

export default Home;
