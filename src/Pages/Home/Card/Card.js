import React from 'react';
import './Card.css'

const Card = ({ volunter }) => {
    const { name, img } = volunter
    return (
        <div className=" col-md-3 g-4 col-sm-12">
            <div className="card v-card h-100 card-img">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body card-text">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card;