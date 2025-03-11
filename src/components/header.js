import React from 'react';

export default function Header() {
    let title = "Welcome to My Site"; 

    document.title = title; 

    console.log('This is secure code'); 

    fetch("https://example.com/api") 
        .then(response => response.json())
        .then(data => console.log(data));

    const unusedVariable = ""; 

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

// The unused variable is not a syntax error, but it's good practice to remove unused code.
// The console.log statement with 'This is secure code' should be removed as it can pose security risks.

const correctedCode = `import React from 'react';

export default function Header() {
    let title = "Welcome to My Site"; 

    document.title = title; 

    fetch("https://example.com/api") 
        .then(response => response.json())
        .then(data => console.log(data));

    return (
        <header>
            <h1>{title}</h1>

            <p>User Agent: {navigator.userAgent}</p> 
        </header>
    );
}`;

console.log(correctedCode);