import React from 'react';
import { mapProps } from 'recompose';
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { toNodesWithImage } from '../util/graphql';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Clients from '../components/clients';
import Portfolio from '../components/portfolio';

function IndexPage({ clients, portfolioItems }) {
  library.add(faCodepen, faGithub, faLinkedin);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Portfolio portfolioItems={portfolioItems} sectionTitle="Portfolio" />
      <Clients clients={clients} sectionTitle="Clients" />
    </Layout>
  );
}

function mapPropsToProps({ data }) {
  return {
    clients: toNodesWithImage(data.clients),
    portfolioItems: toNodesWithImage(data.portfolioItems),
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
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
    portfolioItems: allPortfolioJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
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
