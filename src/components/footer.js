import React from 'react';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  if (currentYear === 2025) {
    console.log("Happy New Year!");
  }

  console.log(`Current Year: ${currentYear}`);

  localStorage.setItem('year', String(currentYear));

  return (
    <footer>
      <p>&copy; {currentYear} My Website</p>

      <p>Data from external source: {document.cookie}</p> 
    </footer>
  );
}