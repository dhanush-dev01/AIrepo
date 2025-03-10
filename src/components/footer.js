import React from 'react';

export default function Footer() {
    let year = new Date().getFullYear();
    
    if (year === 2025) { 
        console.log("Happy New Year!");
    }

    return (
        <footer>
            <p> &copy; {year} My Website</p>
        </footer>
    );
}