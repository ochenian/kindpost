import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import CartImg from "../assets/kasturi-roy-NO1MXvxy02o-unsplash.jpg";
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
        bgImage: file(relativePath: { eq: "annie-spratt-PhT7MMnxmfo-unsplash.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cartImage: file(relativePath: { eq: "kasturi-roy-NO1MXvxy02o-unsplash.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

    `}
render={data => (
  <Layout site={data.site}>
    {/* <Img fluid={data.file.childImageSharp.fluid} style={{height: `100vh`}} /> */}
    <div className="video-text">
      <p>cultivating kindness</p>
      <div>across the country.</div>

      <button
        className="snipcart-add-item"
        data-item-id="1"
        data-item-name="Postcard"
        data-item-price="5.99"
        data-item-description="Custom handwritten postcard for someone special"
        data-item-image={CartImg}
        data-item-custom1-name="Message type"
        data-item-custom1-options="Birthday|Inspiration|Just Because"
        >
          send a postcard
      </button>
      <video autoplay muted src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4" autoPlay loop playsInline muted></video>
    </div>

    <div className="siteInfoContainer">
      <div className="supportContainer">
        <p>Info.</p>

        <div>About us</div>
        <div>FAQ</div>
        <div>Contact us</div>
      </div>
      <div className="subscribeContainer">
        <p>Subscribe.</p>
        <div className="emailInput">
          <input />
          <button>Sign Up</button>
        </div>

        <p className="privacyText">YOUR EMAIL ADDRESS WILL BE USED IN ACCORDANCE WITH OUR PRIVACY POLICY</p>
      </div>
      <div className="followContainer">
        <p>Follow.</p>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
    </div>
    {/* <div className="Catalogue__text">a little kindness</div>
    <div className="Catalogue__subText">goes a long way</div> */}
    {/* <div className="Catalogue">
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
                <span className="Product__buy">send</span>
              </div>
            </div>
          </div>
        ))
      }
    </div> */}
  </Layout>
     )}
   />
)
