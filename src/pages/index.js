import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts/index'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
// import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
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
        postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2000, quality: 100) {
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
        {/* <Img fluid={data.bgImage.childImageSharp.fluid} style={{height: `100vh`}} /> */}

        <Hero></Hero>
        <Showcase />

        {/* <div className="card-example_container">
          <div className="card-example_description">
            <h1>Handpicked Postcards</h1>
            <p>Our vintage postcards are ethically sourced using sustainable practices.</p>
          </div>
          <div className="card-example_photo_container">
            <div className="card-example_photo">
              <Img fluid={data.postcardBirthdayImg.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="card-example_container">
        <div className="card-example_photo_container">
            <div className="card-example_photo">
              <Img fluid={data.postcardBirthdayImg.childImageSharp.fluid} />
            </div>
          </div>
          <div className="card-example_description">
            <h1>Handwritten Messages</h1>
            <p>A member of our staff will personally handwrite a beautiful message to fit the occasion by picked by you.</p>
          </div>
        </div> */}

        {/* <div className="how-container">
          <div className="how-title">how it works</div>
          <div className="step-container">
            <div className="how-step">
              <BirthdaySvg />
              <div>pick an occasion</div>
            </div>
            <div className="how-step">
              <PostcardSvg />
              <div>we'll write a note</div>
            </div>
            <div className="how-step">
              <MailTruckSvg />
              <div>we'll send your postcard</div>
            </div>
            <div className="how-step">
              <HappyFaceSvg />
              <div>happy friend</div>
            </div>
          </div>
        </div> */}

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
      {/* <div className="showcase">
        <Img className="showcase-image" fluid={data.postcardSampleImg.childImageSharp.fluid} />
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"/>
        </svg>
        <div className="showcase-copy">
          <div>Vintage</div>
          <div>Kindness</div>
        </div>

      </div> */}

      </Layout>
    )
  }
