import React from "react";
import InfoSectionComponents from "../../Components/InfoSectionComponents";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./data";
import FeaturedSectionComponents from "../../Components/FeaturedSectionComponents";
import Services from "../ServicesPage/Services";
function Home(props) {
	return (
		<div>
			<InfoSectionComponents id={"Home"} {...homeObjOne} />
			<InfoSectionComponents {...homeObjTwo} />
			<InfoSectionComponents {...homeObjThree} />
			<InfoSectionComponents {...homeObjFour} />
			{/* <FeaturedSectionComponents id={"principles"} /> */}
			{/* <Services id={"services"} /> */}
		</div>
	);
}

export default Home;
