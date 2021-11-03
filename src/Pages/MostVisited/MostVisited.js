// import React, { useEffect, useState } from "react";
// import MostVisit from "./MostVisit";

// const MostVisited = () => {
//   const [visites, setVisites] = useState([]);

//   useEffect(() => {
//     fetch("https://evil-fangs-79869.herokuapp.com/most_visit")
//       .then((res) => res.json())
//       .then(data => {
//         setVisites(data)
        
// })
//   }, []);

//   return (
//     <div id="services">
//       <h1 className="text-warning fw-900 pb-3 mt-5">
//         World's Most Visited Tourist Attractions!!
//       </h1>
//       <div className="service_container">
//         {visites.map((visit) => (
//           <MostVisit key={visit.id} visit={visit}></MostVisit>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MostVisited;
