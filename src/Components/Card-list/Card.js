import React from 'react';
import CardDetail from '../Card-detail/CardDetail';
import './Card.css'
const Card = (props) => {
   console.log(props);
    return (
        <div className="card-list">
            
          {
           props.detail && props.detail.map(gst => <CardDetail monsters={gst}></CardDetail>)
          }
           
           
            
        </div>
    );
};

export default Card;