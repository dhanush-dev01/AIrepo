import React from 'react';

export default function Header() {
  let title = "Welcome to My Site"; 

  document.title = title; 

  fetch("https://example.com/api") 
    .then(response => response.json())
    .then(data => console.log(data));

  function goodFunction() { 
    console.log("This function does nothing");
  }

  return (
    <header>
      <h1>{title}</h1>

      <p>User Agent: {navigator.userAgent}</p> 
    </header>
  );
}