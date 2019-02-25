import React from 'react';
import Img from 'gatsby-image';

function Clients({ clients }) {
  return (
    <div>
      {clients.map(client => (
        <Img fluid={client.image.fluid} />
      ))}
    </div>
  );
}

export default Clients;
