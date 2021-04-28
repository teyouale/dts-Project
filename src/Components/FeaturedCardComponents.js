import React from "react";
import {
  FeaturedCard,
  FeaturedCardContainer,
  FeaturedCardContent,
  FeaturedCardHeader,
  FeaturedCardImgWrapper,
  Heading,
  Img,
} from "./styles/FeaturedCardStyle";
function FeaturedCardComponents({ iconNumber }) {
  return (
    <FeaturedCard>
      <FeaturedCardContainer>
        <FeaturedCardHeader>
          <FeaturedCardImgWrapper>
            <Img src={iconNumber} alt={"yes"} />
          </FeaturedCardImgWrapper>
          <Heading>Robust Workflow</Heading>
        </FeaturedCardHeader>
        <FeaturedCardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          ducimus error in iste magni possimus veniam. Ad adipisci corporis .
        </FeaturedCardContent>
      </FeaturedCardContainer>
    </FeaturedCard>
  );
}

export default FeaturedCardComponents;
