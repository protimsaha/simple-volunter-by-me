import React, { useState, useEffect } from 'react';

const Home = () => {
    const [volunters, setVolunters] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunters')
            .then(res => res.json())
            .then(data => setVolunters(data))
    }, [])

    return (
        <div>
            <p>{volunters.length}</p>
        </div>
    );
};


export default Home;