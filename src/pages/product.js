import React, {useState} from 'react'
import Layout from '../layouts/index'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SampleImg from '../assets/Sample.png'

const ProductPage = () => {

  const [ frontActive, setFrontActive ] = useState(true);
  const [ backActive, setBackActive ] = useState(false);

  const [selectedPostcard, setSelectedPostcard] = useState({});

  function toggleClass() {
    setFrontActive(!frontActive);
    setBackActive(!backActive);
  };

  function selectPostcard(selected) {
    switch(selected) {
      case 0:
        setSelectedPostcard({
          id: 0,
          name: 'Birthday Postcard',
        });
        break;
      case 1:
        setSelectedPostcard({
          id: 1,
          name: 'Inspiration Postcard',
        });
        break;
      case 2:
        setSelectedPostcard({
          id: 2,
          name: 'Just Because Postcard',
        });
        break;
      case 3:
        setSelectedPostcard({
          id: 3,
          name: 'Anniversary Postcard',
        });
        break;
    }
  }

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
      postcardCartImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Layout site={data.site.siteMetadata.siteName} headerClass="Header light">
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
              {/* <select>
                <option>Birthday</option>
                <option>Inspiration</option>
                <option>Just Because</option>
              </select> */}
              <div className="options">
                <button className="btn_picker" onClick={() => selectPostcard(0)}>Birthday</button>
                <button className="btn_picker" onClick={() => selectPostcard(1)}>Inspiration</button>
                <button className="btn_picker" onClick={() => selectPostcard(2)}>Just Because</button>
                <button className="btn_picker" onClick={() => selectPostcard(3)}>Anniversary</button>
              </div>

              <button
                className="Product add snipcart-add-item"
                data-item-id={selectedPostcard.id}
                data-item-name={selectedPostcard.name}
                data-item-url="/product"
                data-item-price="5.99"
                data-item-image={SampleImg}
                data-item-max-quantity="100"
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
