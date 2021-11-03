import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
      
    return (
      <div>
        <div className="one_service pb-3">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h4>Service Price : {price}</h4>
          <p className="px-3"> {description}</p>
          <Link to={`/booking/${_id}`}>
            <button   className="btn btn-warning">Going On</button>
          </Link>
        </div>
      </div>
    );
};

export default Service;