import React, { useEffect, useState } from 'react';
import MostVisit from './MostVisit';

const MostVisited = () => {
    
        const [visites, setVisites] = useState([]);

        useEffect(() => {
          fetch("http://localhost:5000/most_visit")
            .then((res) => res.json())
            .then((data) => setVisites(data));
        }, []);
    
    return (
      <div id="services">
        <h1 className="text-warning fw-900 pb-3 mt-5">
          World's Most Visited Tourist Attractions!!
        </h1>
        <div className="service_container">
          {visites.map((service) => (
            <MostVisit key={service.id} service={service}></MostVisit>
          ))}
        </div>
      </div>
    );
};

export default MostVisited;