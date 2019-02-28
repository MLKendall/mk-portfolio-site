import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mediaQuery } from '../util/style';
import SectionHeader from './section-header';

const PortfolioSection = styled.section`
  text-align: center;
  margin-bottom: 6em;
`;

const PortfolioList = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ClientLogo = styled(Img)`
  flex-basis: 100%;
  margin: 1em auto;

  ${mediaQuery.medium`
    flex-basis: 40%;
  `};

  ${mediaQuery.large`
    flex-basis: 20%;
  `};
`;

function Portfolio({ portfolioItems }) {
  return (
    <PortfolioSection>
      <SectionHeader header="Portfolio" />
      <PortfolioList>
        {portfolioItems.map(portfolioItem => (
          <span>{portfolioItem.name}</span>
        ))}
      </PortfolioList>
    </PortfolioSection>
  );
}

export default Portfolio;
