import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { mediaQuery } from '../../util/style';
import { Section } from '../../components';

const ClientList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ClientLogo = styled(Img)`
  flex-basis: 40%;
  margin: 1em auto;

  ${mediaQuery.medium`
    flex-basis: 28%;
  `};

  ${mediaQuery.large`
    flex-basis: 12%;
  `};
`;

function Clients({ clients, sectionTitle }) {
  return (
    <Section sectionTitle={sectionTitle}>
      <ClientList>
        {clients.map(client => (
          <ClientLogo
            fluid={client.image.fluid}
            key={client.id}
            alt={client.name}
          />
        ))}
      </ClientList>
    </Section>
  );
}

export default Clients;
