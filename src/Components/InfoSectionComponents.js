import React from "react";
import { Link } from "react-router-dom";

import {
  Heading,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSection,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./styles/InfoSectionStyle";
import { Button, Container } from "../Style/GlobalStyle";

function InfoSectionComponents({
  id,
  lightBg,
  primary,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  return (
    <>
      <InfoSection lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  );
}

export default InfoSectionComponents;
