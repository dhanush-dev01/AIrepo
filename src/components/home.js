import React from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("Clicked!"); // Removed semicolon here
  }

  return (
    <div className="home">
      <h1>Home</h1>
      
      <p>Welcome to the Home page.</p>

      <img src="image.jpg" alt="" /> 

      <p>Localized Text: {location.href}</p> // Missing variable location

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {count === 10 && <p>Count reached 10!</p>} // Fixed == to === for comparison
    </div>
  );
}

export default Home;