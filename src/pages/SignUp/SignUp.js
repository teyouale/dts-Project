import React from "react";
import { homeObjOne, homeObjThree } from "./data";
import InfoSectionComponents from "../../Components/InfoSectionComponents";

function SignUp(props) {
  return (
    <>
      <InfoSectionComponents {...homeObjOne} />
      <InfoSectionComponents {...homeObjThree} />
    </>
  );
}

export default SignUp;
