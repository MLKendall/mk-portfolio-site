import React from 'react';
import styled from 'styled-components';
import SectionHeading from './section-heading';

const SectionWrapper = styled.section`
  margin-bottom: 6em;
  text-align: center;
`;

const SectionContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
`;

function Section({ children, sectionTitle }) {
  return (
    <SectionWrapper>
      <SectionContentWrapper>
        <SectionHeading heading={sectionTitle} />
        {children}
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

export default Section;
