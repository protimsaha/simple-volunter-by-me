import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

const Home = () => {
    const [volunters, setVolunters] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunters')
            .then(res => res.json())
            .then(data => setVolunters(data))
    }, [])

    return (
        <div>
            <h2 className='text-center'>I Grow to help the people</h2>
            <div className='d-flex justify-content-center'>
                <input type="text" name='search' />
                <button className='bg-info btn'>Search</button>
            </div>
            <div className='container row mx-auto' >
                {
                    volunters.map(volunter => <Card key={volunter._id} volunter={volunter}></Card>)
                }
            </div>
        </div>
    );
};


export default Home;