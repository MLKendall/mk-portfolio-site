import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mediaQuery } from '../util/style';
import SectionHeader from './section-header';

const AboutSection = styled.section`
  text-align: center;
  margin-bottom: 6em;
  background-color: #2c3e50;
`;

function About({ aboutContent }) {
  return (
    <AboutSection>
      <SectionHeader header="About" />
      <p>{aboutContent}</p>
    </AboutSection>
  );
}

export default Portfolio;
