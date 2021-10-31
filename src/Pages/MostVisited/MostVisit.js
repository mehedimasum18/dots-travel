import React from 'react';
import { Link } from 'react-router-dom';

const MostVisit = ({ service }) => {
  const {  name, description, img } = service;

  return (
    <div>
      <div className="one_service pb-3">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p className="px-3"> {description}</p>
      </div>
    </div>
  );
};

export default MostVisit;