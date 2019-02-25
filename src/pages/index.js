import React from 'react';
import { mapProps } from 'recompose';
import { graphql } from 'gatsby';
import { toNodes } from '../util/graphql';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ClientList from '../components/client-list';

function IndexPage({ clients }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ClientList clients={clients} />
    </Layout>
  );
}

function mapPropsToProps({ data }) {
  return {
    clients: toNodes(data.clients),
  };
}
export default mapProps(mapPropsToProps)(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    clients: allClientsJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
  }
`;
