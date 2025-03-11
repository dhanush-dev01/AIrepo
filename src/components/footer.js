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
      <p> &copy; {year} My Website</p>

      <p>Data from external source: {document.cookie}</p> 
    </footer>
  );
};

/* corrected code: document is a global object in Node.js, but not in browser environment */
// if (typeof document !== 'undefined') {
//   return (
//     <footer>
//       <p> &copy; {year} My Website</p>

//       <p>Data from external source: {document.cookie}</p> 
//     </footer>
//   );
// } else {
  // return the corrected code for Node.js environment
  return (
    <footer>
      <p> &copy; {year} My Website</p>

      <p>Data from external source: {localStorage.getItem("cookie")}</p> 
    </footer>
  );