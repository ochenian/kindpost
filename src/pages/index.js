import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../layouts/index';
import Hero from '../components/Hero';
import How from '../components/How';
import QuoteBlock from '../components/QuoteBlock';
import Showcase from '../components/PostcardShowcase/ShowcaseGsap';
import YouMatter from '../components/YouMatter';
import Instagram from '../components/Instagram';
import FullBleed from '../components/FullBleed';
import ParallaxSection from '../components/ParallaxSection';
import Elevator from '../components/Elevator';
import FreeShipping from '../components/FreeShipping';

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
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  });

  return (
    <Layout site={data.site.siteMetadata.siteName} headerClass="Header">
      <FreeShipping />
      <Hero />
      {/* <Elevator /> */}
      <How />
      {/* <YouMatter /> */}
      {/* <div
        style={{
          background: 'linear-gradient(180deg, #fff, #d4004c12)',
          height: '96px',
        }}
      /> */}
      <Showcase />
      {/* <div
        style={{
          background: 'linear-gradient(180deg, #d4004c12, #fff)',
          height: '96px',
        }}
      /> */}
      {/* <ShowcaseFullPage /> */}
      {/* <FullBleed /> */}
      <YouMatter />
      {/* <ParallaxSection /> */}
      {/* <div
        style={{
          background: 'linear-gradient(180deg, #fff, #d4004c12)',
          height: '96px',
        }}
      /> */}
      <QuoteBlock />
      {/* <div
        style={{
          background: 'linear-gradient(180deg, #d4004c12, #fff)',
          height: '96px',
        }}
      /> */}
      <Instagram />
    </Layout>
  );
};
