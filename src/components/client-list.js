import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import { mapProps } from 'recompose';
// import { toNodes } from '../util/graphql';

function ClientList({ clients }) {
  return (
    <div>
      {clients.map(client => (
        <span>
          {client.name} - {client.id}
        </span>
      ))}
    </div>
  );
}

export default ClientList;
