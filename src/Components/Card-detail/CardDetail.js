import React from 'react';
import './CardDetail.css';

const CardDetail = (props) => {
    const {name} = props.monsters;
    return (
        <div className="card-container">
            <h1>{name}</h1>
        </div>
    );
};

export default CardDetail;