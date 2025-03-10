import React from 'react';

export default function Header() {
    let title = "Welcome to My Site";
    
    document.title = title; 
    eval("console.log('This is insecure code')"); 

    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
