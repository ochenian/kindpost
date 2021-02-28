import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import Gallery from '../components/Gallery';
import FullBleed from '../components/FullBleed';
import Message from '../components/Message';
import How from '../components/How';
import QuoteBlock from '../components/QuoteBlock';
import Showcase from '../components/PostcardShowcase/Showcase';
import InspirationShowcase from '../components/InspirationShowcase';

export default () => {
  const data = useStaticQuery(graphql`
    query CatalogueQuery {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `);
  return (
    <Layout site={data.site.siteMetadata.siteName} headerClass="Header">
      <Hero />
      {/* <Gallery /> */}
      {/* <Divider /> */}
      {/* <Message /> */}
      {/* <InspirationShowcase /> */}
      <Divider />
      {/* <FullBleed /> */}
      <Showcase />
      <Divider />
      <How />
      <QuoteBlock />
    </Layout>
  );
};
