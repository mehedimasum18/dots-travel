
import Button from '@restart/ui/esm/Button';
import React from 'react';

const NewsLatter = () => {
    return (
      <div className="news_latter">
        <h3 style={{ color: "#fdcb6e", outline:"none", marginTop: "2em" }}>Newsletter</h3>
        <p>oin our newsletter to keep be informed about offers and news.</p>
        <input type="email" placeholder="Your mail" name="" id="" />
        <button style={{ backgroundColor : "#fdcb6e", marginTop: "2em" }}>
          Subscribe
        </button>
      </div>
    );
};

export default NewsLatter;