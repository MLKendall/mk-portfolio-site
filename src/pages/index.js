import React from 'react';
import { mapProps } from 'recompose';
import { graphql } from 'gatsby';
import { toNodesWithImage } from '../util/graphql';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Clients from '../components/clients';

function IndexPage({ clients }) {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Clients clients={clients} />
    </Layout>
  );
}

function mapPropsToProps({ data }) {
  return {
    clients: toNodesWithImage(data.clients),
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
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
  }
`;
