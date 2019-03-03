import React from 'react';
import styled from 'styled-components';

//This should take in a color to make it easy to change
//Can be done with a theme provider

// Font weight and family could go in a global style sheet
const H2 = styled.h2`
  color: #2c3e50;
  display: inline-block;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2rem;
  margin: 0.75em;
  text-transform: uppercase;
  text-align: center;

  :after {
    border: none;
    border-color: #2c3e50;
    border-top: solid 0.25rem;
    content: '';
    display: block;
    margin: 0.5em 0 0;
    padding: 0;
    text-align: center;
    width: 15rem;
  }
`;

function SectionHeading({ heading }) {
  return <H2>{heading}</H2>;
}

export default SectionHeading;
