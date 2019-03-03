import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mediaQuery } from '../../util/style';

const HeroSection = styled.section`
  border-bottom: 5rem solid #12a195;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  padding: 3rem 0;

  ${mediaQuery.medium`
    padding: 6rem 0;
`};
`;

const HeroSectionWrapper = styled.div`
  align-items: center;
  color: #12a195;
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  padding: 0 1em;

  ${mediaQuery.medium`
    flex-direction: row;
  `};
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.45rem;

  ${mediaQuery.medium`
    flex: 5;
  `};
`;

const HeroImage = styled(Img)`
  max-width: 100%;
`;

const HeroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${mediaQuery.medium`
    flex: 7;
  `};
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5em;
  text-transform: uppercase;

  :after {
    border: none;
    border-color: #12a195;
    border-top: solid 0.25rem;
    content: '';
    display: block;
    margin: 0.25em auto 0;
    padding: 0;
    text-align: center;
    width: 20rem;
  }

  ${mediaQuery.medium`
    font-size: 4.75rem;
  `};
`;

const HeroTagline = styled.span`
  font-size: 1.75rem;
`;

function Hero({ content }) {
  return (
    <HeroSection>
      <HeroSectionWrapper>
        <HeroImageWrapper>
          <HeroImage fluid={content[0].image.fluid} />
        </HeroImageWrapper>
        <HeroContent>
          <HeroTitle>{content[0].title}</HeroTitle>
          <HeroTagline>{content[0].tagline}</HeroTagline>
        </HeroContent>
      </HeroSectionWrapper>
    </HeroSection>
  );
}

export default Hero;
