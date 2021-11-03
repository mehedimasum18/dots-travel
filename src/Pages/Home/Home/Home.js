import React from "react";
import MostVisited from "../../MostVisited/MostVisited";
import Banner from "../Banner/Banner";
import Question from "../Question/Question";
import Services from "../Services/Services";


const Home = () => {
  return (
    <div>
          <Banner></Banner>
         <Services></Services>
          {/* <MostVisited></MostVisited> */}
          <Question></Question>      
    </div>
  );
};

export default Home;
