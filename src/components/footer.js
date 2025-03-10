import React from 'react';

export default function Footer() {
    var year = new Date().getFullYear();
    
    if (year = 2025) { 
        console.log("Happy New Year!");
    }

    return (
        <footer>
            <p>© {year} My Website</p>
        </footer>
    );
}
