import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GoingOn = () => {
      const { id } = useParams();
      const [fiend, setFiend] = useState();

      const [details, setDetails] = useState([]);
      useEffect(() => {
        fetch("https://evil-fangs-79869.herokuapp.com/users")
          .then((res) => res.json())
          .then((data) => setDetails(data));
      }, []);

      useEffect(() => {
        if (details.length > 0) {
          const matchData = details.find(
            (singleDetails) => singleDetails._id == id
          );
          setFiend(matchData);
          console.log(matchData);
        }
      }, [details]);
    return (
      <div>
        <div className="one_service pb-3">
          <img src={fiend?.img} alt="" />
          <h3>{fiend?.name}</h3>
          <p className="px-3"> {fiend?.description}</p>
        </div>
      </div>
    );
};

export default GoingOn;