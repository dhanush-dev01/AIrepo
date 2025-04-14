import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
    const [title] = useState("Welcome to My Site");
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = title;
        
        const fetchData = async () => {
            try {
                const response = await fetch("https://example.com/api");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setApiData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [title]);

    return (
        <header className="site-header">
            <h1>{title}</h1>
            {error && <div className="error-message">{error}</div>}
            {apiData && <div className="api-data">{JSON.stringify(apiData)}</div>}
        </header>
    );
}