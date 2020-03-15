import React, {useState} from 'react'
import Layout from '../layouts/index'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/header'
import Slider from '../components/Slider'

const ProductPage = () => {

  const [ frontActive, setFrontActive ] = useState(true);
  const [ backActive, setBackActive ] = useState(false);

  function toggleClass() {
    setFrontActive(!frontActive);
    setBackActive(!backActive);
  };

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          siteName
        }
      }
      postcardImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBack: file(relativePath: { eq: "Birthday-no-border.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Layout site={data.site} headerClass="Header light">
      <div>
         <div className="product_container">
            {/* <Slider slides={[data.postcardImg, data.postcardBack]}>
            </Slider> */}
            <div className={!frontActive ? 'card card-front--flip' : 'card card-front'} onClick={toggleClass} >
              <Img fluid={data.postcardImg.childImageSharp.fluid} />
            </div>
            <div className={backActive ? 'card card-back--flip' : 'card card-back'} onClick={toggleClass} >
              <Img fluid={data.postcardBack.childImageSharp.fluid} />
            </div>
            <div className="product_detail">
              <h1>Postcard</h1>
              <p>$5.99</p>
              <p>Custom, handpicked postcard with handwritten message blah blah blah</p>
              <select>
                <option>Birthday</option>
                <option>Inspiration</option>
                <option>Just Because</option>
              </select>
              <button
                className="Product add snipcart-add-item"
                data-item-id="1"
                data-item-name="Custom Postcard"
                data-item-price="5.99"
                data-item-description="Custom handwritten postcard for someone special"
                // data-item-image={CartImg}
                data-item-custom1-name="Message type"
                data-item-custom1-options="Birthday|Inspiration|Just Because"
              >
                ADD TO BAG
              </button>
            </div>
          </div>
      </div>

     </Layout>
    )
}

export default ProductPage
