import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Layout from '../layouts/index';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import Gallery from '../components/Gallery';
import FullBleed from '../components/FullBleed';
import Message from '../components/Message';
import How from '../components/How';
import QuoteBlock from '../components/QuoteBlock';
import Showcase from '../components/PostcardShowcase/ShowcaseGsap';
// import InspirationShowcase from '../components/InspirationShowcase';
import PostcardRows from '../components/PostcardRows';
import PostcardsFalling from '../components/PostcardsFalling';
import YouMatter from '../components/YouMatter';

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

  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.core.globals('ScrollTrigger', ScrollTrigger);
    // }
  });

  return (
    <Layout site={data.site.siteMetadata.siteName} headerClass="Header">
      <Hero />

      <YouMatter />
      {/* <div
        style={{
          background: `#afc0e4`,
          height: `20vh`,
        }}
      ></div> */}
      {/* <InspirationShowcase /> */}
      <Showcase />
      {/* <div
        style={{
          background: `linear-gradient(to bottom, #f5f5d6, #fff2e1, #fff4f3, #fffaff, #ffffff)`,
          height: `33vh`,
        }}
      ></div> */}
      {/* <Divider /> */}
      <How />
      <div
        style={{
          background: `linear-gradient(to bottom, #ffffff, #fcfafb, #faf4f5, #f7efed, #f2ebe5)`,
          height: `10vh`,
        }}
      ></div>
      <QuoteBlock />
      <PostcardRows />
    </Layout>
  );
};
