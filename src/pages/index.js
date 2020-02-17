import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        postcards: allDatoCmsPostcard {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
render={data => (
  <Layout site={data.site}>
    <div className="Catalogue">
      {
        data.postcards.edges.map(({ node: postcard }) => (
          <div className="Catalogue__item" key={postcard.id}>
            <div
              className="Product snipcart-add-item"
              data-item-id={postcard.id}
              data-item-price={postcard.price}
              data-item-image={postcard.image.url}
              data-item-name={postcard.name}
              data-item-url={`/`}
            >
              <div className="Product__image">
                {
                  postcard.image.map((image) => (
                    <Img key="{image.filename}" sizes={image.sizes} />
                  ))
                }

              </div>
              <div className="Product__details">
                <div className="Product__name">
                  {postcard.name}
                  <div className="Product__price">
                    ${postcard.price}
                  </div>
                </div>
                <span className="Product__buy">Buy</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </Layout>
     )}
   />
)
