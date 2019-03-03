import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mediaQuery } from '../../util/style';
import { Section } from '../../components';

const PortfolioList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PortfolioImage = styled(Img)`
  flex-basis: 100%;
  margin: 1em auto;

  ${mediaQuery.medium`
    flex-basis: 45%;
  `};

  ${mediaQuery.large`
    flex-basis: 22%;
  `};
`;

function Portfolio({ portfolioItems, sectionTitle }) {
  return (
    <Section sectionTitle={sectionTitle}>
      <PortfolioList>
        {portfolioItems.map(portfolioItem => (
          <PortfolioImage
            fluid={portfolioItem.image.fluid}
            key={portfolioItem.id}
            alt={portfolioItem.name}
          />
        ))}
      </PortfolioList>
    </Section>
  );
}

export default Portfolio;
