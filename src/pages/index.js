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
      <Hero />

      <YouMatter />
      <Showcase />
      <How />
      <QuoteBlock />
      <Instagram />
    </Layout>
  );
};
