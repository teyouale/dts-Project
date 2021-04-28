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

      <img
        style={{ position: "sticky" }}
        alt="Code Time"
        src="https://img.shields.io/endpoint?style=flat&url=https://codetime-api.datreks.com/badge/684?logoColor=white%26project=dts_project%26recentMS=0%26showProject=false"
      />
    </div>
  );
}

export default Home;
