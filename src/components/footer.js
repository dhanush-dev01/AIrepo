import React from 'react';

export default function Footer() {
  let year = new Date().getFullYear();

  if (year === 2025) {
    console.log("Happy New Year!");
  }

  console.log("Year is: " + year);

  localStorage.setItem('year', year); // Fix: use single quotes instead of double quotes

  return (
    <footer>
      <p> &copy; {year} My Website</p>

      <p>Data from external source: {document.cookie}</p> 
    </footer>
  );
}