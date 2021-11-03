import React from 'react';
import { Link } from 'react-router-dom';
import './Discount.css'
const Discount = () => {
    return (
      <div className="show_discount">
        <h6>Only 1000 $ for person - 6 nights </h6>
        <h1 style={{ color: "#fdcb6e" }}>
          Discount <span style={{ color: "#0B5ED7" }}>10-30%</span> Off
        </h1>
        <p>
          If you’re looking for a truly memorable family break here you find the
          lowest price on the right hotel for you. It's indescribable. Stay up
          <br />
          to date and check out the deals for these trending destinations. Oin
          our newsletter to keep be informed about offers and news.
        </p>
        <Link to="/login">
          <button className="btn btn-warning">Going On </button>
        </Link>
      </div>
    );
};

export default Discount;