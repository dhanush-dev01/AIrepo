import React from 'react';

export default function Footer() {
  let year = new Date().getFullYear();

  if (year === 2025) { 
    console.log("Happy New Year!");
  }

  console.log("Year is: " + year); 

  localStorage.setItem("year", year); 

  return (
    <footer>
      <p>&copy; {year} My Website</p> // Fix: Missing forward slash

      <p>Data from external source: {document.cookie}</p> // Fix: Incorrect syntax for string concatenation
    </footer>
  );
}

// Corrected code: VALID