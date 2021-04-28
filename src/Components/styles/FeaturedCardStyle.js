import styled from "styled-components";
import mixins from "../../Style/mixins";

export const FeaturedCard = styled.div`
  ${mixins.centerContent}

  flex-basis: 317px;
  max-width: 317px;
  padding: 16px;

  box-sizing: content-box;

  line-height: 30px;
  @media screen and (min-width: 614px) {
    padding: 32px;
  }
`;
export const FeaturedCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0;
`;
export const FeaturedCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 317px;
  max-width: 317px;
  box-sizing: content-box;
`;
export const FeaturedCardContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.1px;
  color: #9ca9b3;
`;
export const FeaturedCardImgWrapper = styled.div``;
export const Img = styled.img`
  display: inline-flex;
  border-radius: 50%;
  background-color: #4b59f7;
`;
export const Heading = styled.h4`
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 700;
  color: #f7f8fa;
`;
