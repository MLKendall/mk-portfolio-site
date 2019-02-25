import React, { Fragment } from 'react';
import styled from 'styled-components';

//This should take in a color to make it easy to change
//Can be done with a theme provider

// Font weight and family could go in a global style sheet
const H2 = styled.h2`
  color: #2c3e50;
  display: inline-block;
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 2.25rem;
  line-height: 2rem;
  text-transform: uppercase;
  text-align: center;

  :after {
    content: '';
    display: block;
    width: 15rem;
    padding: 0;
    text-align: center;
    border: none;
    border-color: #2c3e50;
    border-top: solid 0.25rem;
    margin: 0.5em 0 0;
  }
`;

// const SectionHeaderHR = styled.hr`
//   max-width: 15rem;
//   padding: 0;
//   text-align: center;
//   border: none;
//   border-color: #2c3e50;
//   border-top: solid 0.25rem;
//   margin: 1.5em auto 1.875em;
// `;

function SectionHeader({ header }) {
  return (
    <React.Fragment>
      <H2>{header}</H2>
      {/* <SectionHeaderHR /> */}
    </React.Fragment>
  );
}

export default SectionHeader;
