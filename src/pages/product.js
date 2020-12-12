import React, { useState, useContext, useEffect } from 'react';
import Layout from '../layouts/index';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SampleImg from '../assets/Sample.png';
import { useSpring, animated } from 'react-spring';
import Products from '../content/products.json';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useAddItemToCart } from 'gatsby-theme-shopify-manager';
import CtaButton from '../components/shared/Button';
import { useMediaQuery } from 'react-responsive';
import { CartContext } from '../components/Cart/CartContext';

const ProductPage = () => {
  const { toggleCart } = useContext(CartContext);
  const [isZoomed, setIsZoomed] = useState(false);
  const mobile = useMediaQuery({
    query: '(max-width: 950px)',
  });

  // const handleZoomChange = useCallback(shouldZoom => {
  //   setIsZoomed(shouldZoom)
  // }, [])

  function toggleClass() {
    setFrontActive(!frontActive);
    setBackActive(!backActive);
  }

  const AnimatedImgContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const AnimatedImg = animated(Img);

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  // const [float, setFloat] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const { xys, config } = useSpring({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  });

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          siteName
        }
      }
      postcardImg: file(relativePath: { eq: "Hollywood.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 90) {
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
      postcardCongratulationsFront: file(
        relativePath: { eq: "SantaCruz.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsBack: file(
        relativePath: { eq: "Congratulations.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementFront: file(relativePath: { eq: "Twilight.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementBack: file(
        relativePath: { eq: "Encouragement.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveFront: file(relativePath: { eq: "Poppies.png" }) {
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
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
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
  `);

  const [frontActive, setFrontActive] = useState(true);
  const [backActive, setBackActive] = useState(false);

  const [selectedPostcard, setSelectedPostcard] = useState({
    id: 'birthday',
    name: 'Birthday Postcard',
    description: `Another year to remember! Our team will select a vintage
          postcard for you, on which we will dream up and write a lovely birthday
          wish for you or your loved one. `,
    imgFront: data.postcardImg.childImageSharp.fluid,
    imgBack: data.postcardBack.childImageSharp.fluid,
  });

  function selectPostcard(selected) {
    switch (selected) {
      case 'birthday':
        setSelectedPostcard({
          id: 'birthday',
          name: 'Birthday Postcard',
          description: `Another year to remember! Our team will select a vintage
          postcard for you, on which we will dream up and write a lovely birthday
          wish for you or your loved one. `,
          imgFront: data.postcardImg.childImageSharp.fluid,
          imgBack: data.postcardBack.childImageSharp.fluid,
        });
        break;
      case 'congratulations':
        setSelectedPostcard({
          id: 'congratulations',
          name: 'Congratulations Postcard',
          description: `We love to commemorate events large and small.
          Our team will choose a vintage postcard, on which we will craft a sweet
          message celebrating you or your loved one. `,
          imgFront: data.postcardCongratulationsFront.childImageSharp.fluid,
          imgBack: data.postcardCongratulationsBack.childImageSharp.fluid,
        });
        break;
      case 'love':
        setSelectedPostcard({
          id: 'love',
          name: 'Love Postcard',
          description: `Here at Kindpost, we are lovers of love. Our team will
          handpick a vintage postcard, on which we will craft a message celebrating
          love, for you or your loved one. `,
          imgFront: data.postcardLoveFront.childImageSharp.fluid,
          imgBack: data.postcardLoveBack.childImageSharp.fluid,
        });
        break;
      case 'encouragement':
        setSelectedPostcard({
          id: 'encouragement',
          name: 'Encouragement Postcard',
          description: `At Kindpost, we believe in sharing positivity and support.
          Our team will select a vintage postcard, on which we will write a thoughtful
          message of encouragement for you or your loved one. `,
          imgFront: data.postcardEncouragementFront.childImageSharp.fluid,
          imgBack: data.postcardEncouragementBack.childImageSharp.fluid,
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

  const ProductName = styled.h1`
    margin-bottom: 1rem;
  `;

  const SubHeaderLabel = styled.div`
    letter-spacing: 4px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.8);
    margin: 1rem 0;
    font-family: 'Averia Serif Libre';
  `;

  const Price = styled.div`
    font-family: 'Averia Serif Libre';
    font-size: 2rem;
    margin: 1rem 0;
    color: #4a4a4a;
  `;

  const Description = styled.div`
    /* margin: 1rem 0; */
    margin-bottom: 1rem;
    max-width: 60ch;
    font-family: 'Averia Serif Libre';
    line-height: 2;
    color: #4a4a4a;
  `;

  const OptionsContainer = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin: -12px 0 0 -12px;
    width: calc(100% + 12px);

    margin-bottom: 1rem;
  `;

  const Option = styled.button`
    margin: 12px 0 0 12px;
  `;

  const Variants = styled(CtaButton)`
    margin: 12px 0 0 12px;
    color: #f40075;
    border: 1px solid #f40075;
    letter-spacing: 2px;

    &.selected {
      background: #f40075;
      /* background: linear-gradient(180deg, #d4004c 0%, #f40075 100%); */
      color: #fff;
    }
  `;

  const Checkout = styled(CtaButton)`
    color: #f40075;
    border: 1px solid #f40075;
    letter-spacing: 2px;
    max-width: 316px;
  `;

  const ZoomButton = styled(motion.div)`
    position: absolute;
    top: 200px;
  `;
  const rightControls = useAnimation();
  const leftControls = useAnimation();

  function onZoom() {
    // rightControls.start({
    //   width: "0%",
    //   padding: "0",
    //   margin: "0",
    //   flexBasis: "0",
    // })
    rightControls.start({
      display: 'none',
    });
    leftControls.start({
      // position: "absolute",
      // width: "100%",
      // height: "100%",
      // zIndex: 20,
      // background: "rgba(255, 199, 199, 1.0)",
      flexBasis: '100%',
      transform: 'scale(1.75)',
      transition: { duration: 1 },
    });
  }

  const addItemToCart = useAddItemToCart();

  async function addToCart(variantId, quantity) {
    try {
      await addItemToCart(variantId, quantity);
      toggleCart();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout site={data.site.siteMetadata.siteName} headerClass="Header light">
      <div>
        <div className="product_container">
          {/* <Slider slides={[data.postcardImg, data.postcardBack]}>
            </Slider> */}
          {/* <div className="left" onClick={() => set(state => !state)}> */}
          <motion.div
            className="left"
            animate={leftControls}
            onClick={() => set(flipped => !flipped)}
          >
            {/* <ZoomButton onClick={() => onZoom()}>Zoom</ZoomButton> */}

            <AnimatedImg
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              className="c"
              style={{
                opacity: opacity.interpolate(o => 1 - o),
                transform,
              }}
              // fluid={data.postcardImg.childImageSharp.fluid} />
              fluid={selectedPostcard.imgFront}
            />

            <AnimatedImg
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              className="c"
              style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateY(-180deg)`),
              }}
              fluid={selectedPostcard.imgBack}
            />
          </motion.div>

          <motion.div animate={rightControls} className="product_detail right">
            <ProductName>KINDPOST</ProductName>
            <SubHeaderLabel>description</SubHeaderLabel>
            <Description>
              A kindpost is a carefully curated vintage postcard with a unique
              handwritten message of positivity crafted by the team in our sunny
              California office.
            </Description>
            <Description>
              Your custom, handwritten message will be based on your selected
              occasion.
            </Description>
            <SubHeaderLabel>occasion</SubHeaderLabel>
            <OptionsContainer>
              {Products.map(product => {
                return (
                  <Variants
                    key={product.id}
                    className={`${
                      selectedPostcard.id === product.id ? 'selected' : ''
                    }`}
                    onClick={() => onPostcardSelect(product.id)}
                  >
                    {product.name}
                  </Variants>
                );
              })}
            </OptionsContainer>
            {selectedPostcard && (
              <>
                <SubHeaderLabel>details</SubHeaderLabel>
                <Description>{selectedPostcard.description}</Description>
              </>
            )}
            {/* <Price>$12</Price> */}
            <Checkout
              className="Product snipcart-add-item"
              onClick={() =>
                addToCart(data.products.edges[0].node.variants[0].shopifyId, 1)
              }
            >
              $12 &mdash; ADD TO BAG
            </Checkout>
            {/* <p>NOTE:</p>
              <p>Our postcards are sustainably sourced from individual collectors. As such, we cannot guarantee a specific card for your recipient.</p>
              <p>If you have a specific idea of a postcard or message you would like to send, include it in a message with your order and we’ll do our best to meet your request!</p> */}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
