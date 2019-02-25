import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SectionHeader from './section-header';

const ClientSection = styled.section`
  text-align: center;
`;

const ClientList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Clients({ clients }) {
  return (
    <ClientSection>
      <SectionHeader header="Clients" />
      <ClientList>
        {clients.map(client => (
          <Img fixed={client.image.fixed} key={client.id} alt={client.name} />
        ))}
      </ClientList>
    </ClientSection>
  );
}

export default Clients;
