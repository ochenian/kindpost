import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts/index'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import Gallery from '../components/Gallery'
import FullBleed from '../components/FullBleed'
import Message from '../components/Message'

export default () => {
  const data = useStaticQuery(graphql`
      query CatalogueQuery {
        site {
          siteMetadata {
            siteName
          }
        }
        postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cartImage: file(
          relativePath: { eq: "kasturi-roy-NO1MXvxy02o-unsplash.jpg" }
        ) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
      <Layout site={data.site.siteMetadata.siteName} headerClass="Header">
        <Hero></Hero>
        <Gallery />
        <Divider />
        <Message />
        <Divider />
        <FullBleed />
      </Layout>
    )
  }
