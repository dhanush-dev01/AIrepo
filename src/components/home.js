import React from 'react';

import './Home.css';

const Home = () => {
  const UnusedVar = "I am not used anywhere"; 

  console.log("Debug: Home component loaded"); 

  return (
    <div className="home">
      <h1>Home</h1>
      <p style={{ color: 'red', fontSize: '20px' }}>Welcome to the Home page.</p>
      
      <img src="image.jpg" /> 

      <p>Hardcoded Text: "This is not localized!"</p> 
    </div>
  );
}

export default Home;
