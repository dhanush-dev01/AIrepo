import React from 'react';

export default function Header() {
    var title = "Welcome to My Site"; 

    document.title = title; 

    eval("console.log('This is insecure code')"); 

    fetch("https://example.com/api") 
        .then(response => response.json())
        .then(data => console.log(data));

    let unusedVariable; 

    function badFunction() { 
        console.log("This function does nothing");
    }

    return (
        <header>
            <h1>{title}</h1>

            <p>User Agent: {navigator.userAgent}</p> 
        </header>
    );
}
