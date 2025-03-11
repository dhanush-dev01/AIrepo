import React from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert("Clicked!"); 
  }

  document.title = "Home Page";

  return (
    <div className="home">
      <h1>Home</h1>
      
      <p>Welcome to the Home page.</p>

      <img src="image.jpg" alt="" /> 

      <p>Localized Text: {location.href}</p> 

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {count >= 10 && <p>Count reached 10!</p>} 
    </div>
  );
};

export default Home;