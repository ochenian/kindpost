import React, { useState, useCallback } from 'react'
import Layout from '../layouts/index'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SampleImg from '../assets/Sample.png'
import { useSpring, animated } from 'react-spring'
import Products from "../content/products.json"
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import styled from 'styled-components'
import { motion, useAnimation } from "framer-motion"
import { useAddItemToCart } from 'gatsby-theme-shopify-manager';

const ProductPage = () => {

  const [isZoomed, setIsZoomed] = useState(false)

  // const handleZoomChange = useCallback(shouldZoom => {
  //   setIsZoomed(shouldZoom)
  // }, [])

  function toggleClass() {
    setFrontActive(!frontActive);
    setBackActive(!backActive);
  };

  const AnimatedImgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const AnimatedImg = animated(Img)

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  // const [float, setFloat] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const { xys, config } = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })

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
      postcardCongratulationsBack: file(relativePath: { eq: "Congratulations.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementBack: file(relativePath: { eq: "Encouragement.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveBack: file(relativePath: { eq: "Love.png" }) {
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
        products: allShopifyProduct(
        sort: { fields: [publishedAt], order: ASC }
      ) {
        edges {
          node {
            id
            handle
            title
            description
            productType
            variants {
              shopifyId
              title
              price
              availableForSale
            }
          }
        }
      }
    }
  `)

  const [ frontActive, setFrontActive ] = useState(true);
  const [ backActive, setBackActive ] = useState(false);

  const [selectedPostcard, setSelectedPostcard] = useState({
    id: 'birthday',
    name: 'Birthday Postcard',
    img: data.postcardBack.childImageSharp.fluid
  });

  function selectPostcard(selected) {
    switch(selected) {
      case 'birthday':
        setSelectedPostcard({
          id: 'birthday',
          name: 'Birthday Postcard',
          img: data.postcardBack.childImageSharp.fluid
        });
        break;
      case 'congratulations':
        setSelectedPostcard({
          id: 'congratulations',
          name: 'Congratulations Postcard',
          img: data.postcardCongratulationsBack.childImageSharp.fluid
        });
        break;
      case 'love':
        setSelectedPostcard({
          id: 'love',
          name: 'Love Postcard',
          img: data.postcardLoveBack.childImageSharp.fluid
        });
        break;
      case 'encouragement':
        setSelectedPostcard({
          id: 'encouragement',
          name: 'Encouragement Postcard',
          img: data.postcardEncouragementBack.childImageSharp.fluid
        });
        break;
    }
  }

  function onPostcardSelect(selected) {
    if (!flipped) {
      set(state => !state);
    }

    selectPostcard(selected);
  }

  const ZoomButton = styled(motion.div)`
    position: absolute;
    top: 200px;
  `
  const rightControls = useAnimation()
  const leftControls = useAnimation()

  function onZoom() {
    // rightControls.start({
    //   width: "0%",
    //   padding: "0",
    //   margin: "0",
    //   flexBasis: "0",
    // })
    rightControls.start({
      display: 'none',
    })
    leftControls.start({
      // position: "absolute",
      // width: "100%",
      // height: "100%",
      // zIndex: 20,
      // background: "rgba(255, 199, 199, 1.0)",
      flexBasis: '100%',
      transform: "scale(1.75)",
      transition: { duration: 1 },
    })
  }

  const addItemToCart = useAddItemToCart()

  async function addToCart(variantId, quantity) {
    try {
      await addItemToCart(variantId, quantity);
    } catch(e) {
      console.log(e)
    }
  }

  return (
      <Layout site={data.site.siteMetadata.siteName} headerClass="Header light">
      <div>
         <div className="product_container">
            {/* <Slider slides={[data.postcardImg, data.postcardBack]}>
            </Slider> */}
            {/* <div className="left" onClick={() => set(state => !state)}> */}
            <motion.div className="left" animate={leftControls} onClick={() => set(flipped => !flipped)}>

              {/* <ZoomButton onClick={() => onZoom()}>Zoom</ZoomButton> */}

                <AnimatedImg
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  className="c"
                  style={{
                    opacity: opacity.interpolate(o => 1 - o),
                    transform
                  }}
                  fluid={data.postcardImg.childImageSharp.fluid} />

                <AnimatedImg
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  className="c"
                  style={{
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateY(-180deg)`)
                  }}
                  fluid={selectedPostcard.img} />


            </motion.div>

            {/* <div className={!frontActive ? 'card card-front--flip' : 'card card-front'} onClick={toggleClass} >
              <Img fluid={data.postcardImg.childImageSharp.fluid} />
            </div>
            <div className={backActive ? 'card card-back--flip' : 'card card-back'} onClick={toggleClass} >
              <Img fluid={data.postcardBack.childImageSharp.fluid} />
            </div> */}

            <motion.div animate={rightControls} className="product_detail right">
              <h1>KINDPOST</h1>
              <p>$5.99</p>
              <p>A kindpost is a carefully curated vintage postcard with a unique handwritten message of positivity
                crafted by the team in our sunny California office.</p>
              <p>Your custom, handwritten message will be based on your selected occasion.</p>
              {/* <select>
                <option>Birthday</option>
                <option>Inspiration</option>
                <option>Just Because</option>
              </select> */}
              <div className="options">
              {
                Products.map((product) => {
                  return <button key={product.id} className={`btn_picker ${selectedPostcard.id === product.id ? 'selected' : ''}`}
                                 onClick={() => onPostcardSelect(product.id)}>{product.name}
                         </button>
                })
              }
              </div>

              {/* <div className="options">
                <button className={`btn_picker ${selectedPostcard.id === 'birthday' ? 'selected' : ''}`} onClick={() => selectPostcard(0)}>Birthday</button>
                <button className={`btn_picker ${selectedPostcard.id === 'inspiration' ? 'selected' : ''}`} onClick={() => selectPostcard(1)}>Inspiration</button>
                <button className={`btn_picker ${selectedPostcard.id === 'just-because' ? 'selected' : ''}`} onClick={() => selectPostcard(2)}>Just Because</button>
                <button className={`btn_picker ${selectedPostcard.id === 'anniversary' ? 'selected' : ''}`} onClick={() => selectPostcard(3)}>Anniversary</button>
              </div> */}

              {/* <button
                className="Product add snipcart-add-item"
                data-item-id='postcard'
                data-item-name={selectedPostcard.name}
                data-item-url="/product"
                data-item-price="5.99"
                data-item-image={SampleImg}
                data-item-max-quantity="100"
                data-item-categories={selectedPostcard.name}
              >
                ADD TO BAG
              </button> */}


              <button
                className="Product add snipcart-add-item"
                onClick={() => addToCart(data.products.edges[0].node.variants[0].shopifyId, 1)}
              >
                ADD TO BAG
              </button>

              {/* <p>NOTE:</p>
              <p>Our postcards are sustainably sourced from individual collectors. As such, we cannot guarantee a specific card for your recipient.</p>
              <p>If you have a specific idea of a postcard or message you would like to send, include it in a message with your order and we’ll do our best to meet your request!</p> */}
            </motion.div>
          </div>
      </div>

     </Layout>
    )
}

export default ProductPage
