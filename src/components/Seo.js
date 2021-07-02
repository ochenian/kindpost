import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, additionalSchema }) => {
  const query = graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
        }
      }
    }
  `;

  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: seo.url,
      name: title,
      alternateName: defaultTitle,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'http://www.kindpostco.com',
      logo: 'http://www.kindpostco.com/KP_Logo_Black-Pink.png',
    },
  ];

  const schema = additionalSchema
    ? [...baseSchema, ...additionalSchema]
    : baseSchema;

  return (
    <Helmet>
      {/* General tags */}
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* OpenGraph tags */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {/* Keep for future blog posts */}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
export default SEO;
