import styled from "styled-components";

export const FeaturedSection = styled.div`
  color: #fff;
`;
export const FeaturedColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
export const FeaturedHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 690px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #a9b3c1;
  padding-bottom: 80px;
`;

export const FeaturedContains = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
