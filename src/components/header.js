import React from 'react';

export default function Header() {
    let title = "Welcome to My Site"; 

    document.title = title; 

    console.log('This is a safer way of logging');

    fetch("https://example.com/api") 
        .then(response => response.json())
        .then(data => console.log(data));

    const unusedVariable; // Removed the semicolon here

    function goodFunction() { 
        console.log("This function does something");
    }

    return (
        <header>
            <h1>{title}</h1>

            <p>User Agent: {navigator.userAgent}</p> 
        </header>
    );
}
VALID