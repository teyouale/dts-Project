import React from "react";
import InfoSectionComponents from "../../Components/InfoSectionComponents";
import { homeObjOne, homeObjTwo } from "./data";
import FeaturedSectionComponents from "../../Components/FeaturedSectionComponents";
import Services from "../ServicesPage/Services";
function Home(props) {
  return (
    <div>
      <InfoSectionComponents {...homeObjOne} />
      <InfoSectionComponents {...homeObjTwo} />
      <FeaturedSectionComponents />
      <Services />
    </div>
  );
}

export default Home;
