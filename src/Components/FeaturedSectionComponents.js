import React from "react";
import {
  Description,
  FeaturedColumn,
  FeaturedContains,
  FeaturedHeader,
  FeaturedSection,
  Heading,
} from "./styles/FeaturedSection";
import { Container } from "../Style/GlobalStyle";
import FeaturedCardComponents from "./FeaturedCardComponents";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../image/index";

function FeaturedSectionComponents({ id }) {
  return (
    <FeaturedSection id={id}>
      <Container>
        <FeaturedColumn>
          <FeaturedHeader>
            <Heading lightText={true}> Build up the whole picture</Heading>
            <Description lightTextDesc={true}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              cum cupiditate delectus laudantium pariatur perspiciatis provident
              repellendus sit. Corporis explicabo iste magni modi odit? Ex modi
              nam repellat totam vitae!
            </Description>
          </FeaturedHeader>
          <FeaturedContains>
            <FeaturedCardComponents iconNumber={icon1} />
            <FeaturedCardComponents iconNumber={icon2} />
            <FeaturedCardComponents iconNumber={icon3} />
            <FeaturedCardComponents iconNumber={icon4} />
            <FeaturedCardComponents iconNumber={icon5} />
            <FeaturedCardComponents iconNumber={icon6} />
          </FeaturedContains>
        </FeaturedColumn>
      </Container>
    </FeaturedSection>
  );
}

export default FeaturedSectionComponents;
