import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
      <div className="notFound_img">
        
      <Link to="/"> <button>Go Back </button></Link>
        
        </div>
    );
};

export default NotFound;