import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/users")
          .then((res) => res.json())
          .then((data) => setServices(data));
        
    }, [])
    
    return (
        
        <div id="services">
            <h1 className="text-warning fw-900 pb-3 mt-5"> Best Options For Traveling  </h1>
            <div className='service_container'>
                {
                    services.map(service => <Service
                    
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;