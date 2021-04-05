import React, { useState, useContext, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import 'react-medium-image-zoom/dist/styles.css';
import styled from 'styled-components';
// fetch the large, unoptimized version of the SDK
import Client from 'shopify-buy/index.unoptimized.umd';
import { motion, useAnimation } from 'framer-motion';
import { useAddItemToCart, useCartItems } from 'gatsby-theme-shopify-manager';
import Layout from '../layouts/index';
import CtaButton from '../components/shared/Button';
import { CartContext } from '../components/Cart/CartContext';
import How from '../components/How';
import Divider from '../components/Divider';

const ProductName = styled.h1`
  margin-bottom: 1rem;
  color: #282828;
`;

const SubHeaderLabel = styled.div`
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #282828;
  margin: 1rem 0;
  font-family: 'Montserrat';
`;

const Description = styled.div`
  /* margin: 1rem 0; */
  margin-bottom: 1rem;
  max-width: 60ch;
  font-family: 'orpheuspro';
  letter-spacing: 0.5px;
  line-height: 2;
  color: #282828;
`;

const OptionsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -12px 0 0 -12px;
  width: calc(100% + 12px);

  margin-bottom: 1rem;
`;

const Variants = styled(CtaButton)`
  &&& {
    margin: 12px 0 0 12px;
    color: #f40075;
    border: 1px solid #f40075;
    letter-spacing: 2px;
    border-radius: 0;

    &.selected {
      // background: #f40075;
      /* background: linear-gradient(180deg, #d4004c 0%, #f40075 100%); */
      background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
      color: #fff;
      border: 1px solid transparent;
    }
  }
`;

const Checkout = styled(CtaButton)`
  &&& {
    color: #f40075;
    border: 1px solid #f40075;
    letter-spacing: 2px;
    max-width: 316px;
    text-decoration: none;
    border-radius: 0;
  }
`;

const SoldOut = styled(CtaButton)`
  &&& {
    color: #fff;
    background: #dedede;
    letter-spacing: 2px;
    max-width: 316px;
    cursor: default;
    border-radius: 0;
  }
`;

const Note = styled.div`
  align-self: flex-end;
  max-width: 50ch;
  font-size: 0.75rem;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'orpheuspro';
  letter-spacing: 0.5px;
`;

const ClickToFlip = styled(Img)`
  width: 25%;
  top: -25%;
  left: 25%;
  max-width: 200px;
  opacity: 0.8;
`;

const ProductPage = () => {
  const { showCart, toggleCart } = useContext(CartContext);
  const [soldOut, setSoldOut] = useState(false);
  const cartItems = useCartItems();
  const [showSoldOut, setShowSoldOut] = useState(false);
  const [showAlreadyInCart, setShowAlreadyInCart] = useState(false);

  const client = Client.buildClient({
    domain: `${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  });

  useEffect(() => {
    // Fetch 'quantityAvailable' dynamically to get an updated quantity on page entry
    const productsQuery = client.graphQLClient.query(root => {
      root.addConnection('products', { args: { first: 10 } }, product => {
        product.addConnection('variants', { args: { first: 10 } }, variant => {
          variant.add('quantityAvailable');
        });
      });
    });

    client.graphQLClient.send(productsQuery).then(({ model, data }) => {
      const products = data.products.edges[0].node.variants.edges.map(
        variant => {
          const { node } = variant;
          return {
            total: node.quantityAvailable,
          };
        },
      );

      setSoldOut(
        products.reduce(
          (accumulator, product) => accumulator + (10 - product.total),
          0,
        ) >= 10,
      );
    });
  }, [client.graphQLClient]);

  const AnimatedImg = animated(Img);

  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          siteName
        }
      }
      postcardImg: file(relativePath: { eq: "Hollywood.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBack: file(relativePath: { eq: "Birthday-no-border.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsFront: file(
        relativePath: { eq: "SantaCruz.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsBack: file(
        relativePath: { eq: "Congratulations.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementFront: file(relativePath: { eq: "Twilight.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementBack: file(
        relativePath: { eq: "Encouragement.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveFront: file(relativePath: { eq: "Poppies.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveBack: file(relativePath: { eq: "Love.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clickToFlip: file(relativePath: { eq: "click_to_flip.png" }) {
        childImageSharp {
          fluid(quality: 100) {
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
              quantityAvailable
            }
          }
        }
      }
    }
  `);

  const products = data.products.edges[0].node.variants.map(variant => {
    return {
      id: variant.title.toLowerCase(),
      title: variant.title,
      price: variant.price,
      shopifyId: variant.shopifyId,
      name: variant.title,
    };
  });

  const [selectedPostcard, setSelectedPostcard] = useState({
    ...products[0],
    description: `Another year to remember! Our team will select a vintage
          postcard for you, on which we will dream up and write a lovely birthday
          wish for you or your loved one. `,
    imgFront: data.postcardImg.childImageSharp.fluid,
    imgBack: data.postcardBack.childImageSharp.fluid,
  });
  const [isAddToCartDisabled, setAddToCartDisabled] = useState(
    cartItems
      .map(item => item.variant.title.toLowerCase())
      .includes(selectedPostcard.id),
  );

  useEffect(() => {
    if (soldOut || isAddToCartDisabled) {
      setShowSoldOut(true);
    } else {
      setShowSoldOut(false);
    }
  }, [soldOut, isAddToCartDisabled]);

  useEffect(() => {
    if (isAddToCartDisabled) {
      setShowAlreadyInCart(true);
    } else {
      setShowAlreadyInCart(false);
    }
  }, [isAddToCartDisabled]);

  function selectPostcard(selected) {
    switch (selected.id) {
      case 'birthday':
        setSelectedPostcard({
          ...selected,
          description: `Another year to remember! Our team will select a vintage
          postcard for you, on which we will dream up and write a lovely birthday
          wish for you or your loved one. `,
          imgFront: data.postcardImg.childImageSharp.fluid,
          imgBack: data.postcardBack.childImageSharp.fluid,
        });
        break;
      case 'congratulations':
        setSelectedPostcard({
          ...selected,
          description: `We love to commemorate events large and small.
          Our team will choose a vintage postcard, on which we will craft a sweet
          message celebrating you or your loved one. `,
          imgFront: data.postcardCongratulationsFront.childImageSharp.fluid,
          imgBack: data.postcardCongratulationsBack.childImageSharp.fluid,
        });
        break;
      case 'love':
        setSelectedPostcard({
          ...selected,
          description: `Here at Kindpost, we are lovers of love. Our team will
          handpick a vintage postcard, on which we will craft a message celebrating
          love, for you or your loved one. `,
          imgFront: data.postcardLoveFront.childImageSharp.fluid,
          imgBack: data.postcardLoveBack.childImageSharp.fluid,
        });
        break;
      case 'encouragement':
        setSelectedPostcard({
          ...selected,
          description: `At Kindpost, we believe in sharing positivity and support.
          Our team will select a vintage postcard, on which we will write a thoughtful
          message of encouragement for you or your loved one. `,
          imgFront: data.postcardEncouragementFront.childImageSharp.fluid,
          imgBack: data.postcardEncouragementBack.childImageSharp.fluid,
        });
        break;

      default:
        setSelectedPostcard({
          ...selected,
          description: `Another year to remember! Our team will select a vintage
          postcard for you, on which we will dream up and write a lovely birthday
          wish for you or your loved one. `,
          imgFront: data.postcardImg.childImageSharp.fluid,
          imgBack: data.postcardBack.childImageSharp.fluid,
        });
        break;
    }
  }

  function onPostcardSelect(selected) {
    if (!flipped) {
      setFlipped(state => !state);
    }

    selectPostcard(selected);

    const selectedItemInCart = cartItems
      .map(item => item.variant.title.toLowerCase())
      .includes(selected.id);
    setAddToCartDisabled(selectedItemInCart);
  }

  useEffect(() => {
    const alreadyInCart = cartItems
      .map(item => item.variant.title.toLowerCase())
      .includes(selectedPostcard.id);
    setAddToCartDisabled(alreadyInCart);
  }, [cartItems, showCart, selectedPostcard.id]);

  const rightControls = useAnimation();
  const leftControls = useAnimation();

  const addItemToCart = useAddItemToCart();

  async function addToCart(variantId, quantity) {
    try {
      await addItemToCart(variantId, quantity);
      toggleCart();
      setAddToCartDisabled(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout site={data.site.siteMetadata.siteName} headerClass="Header light">
      <div>
        <div className="product_container">
          <motion.div
            className="left"
            animate={leftControls}
            onClick={() => setFlipped(flippedState => !flippedState)}
          >
            <ClickToFlip fluid={data.clickToFlip.childImageSharp.fluid} />
            <AnimatedImg
              className="c"
              style={{
                opacity: opacity.interpolate(o => 1 - o),
                transform,
                maxWidth: '550px',
              }}
              fluid={selectedPostcard.imgFront}
            />

            <AnimatedImg
              className="c"
              style={{
                opacity,
                transform: transform.interpolate(t => `${t} rotateY(-180deg)`),
                maxWidth: '550px',
              }}
              fluid={selectedPostcard.imgBack}
            />

            <Note>
              <div>NOTE:</div>
              <div>
                All Kindposts are uniquely handpicked for each order. All images
                on this website are for illustrative purposes only and do not
                depict the actual product that will be received.
              </div>
              <a href="/faq#design">Learn More</a>
            </Note>
            {/* </div> */}
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
              {products.map(product => {
                return (
                  <Variants
                    key={product.id}
                    className={`${
                      selectedPostcard.id === product.id ? 'selected' : ''
                    }`}
                    onClick={() => onPostcardSelect(product)}
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
            {showSoldOut ? (
              <SoldOut disabled>
                {showAlreadyInCart ? 'ALREADY IN CART' : 'SOLD OUT'}
              </SoldOut>
            ) : (
              <Checkout
                onClick={() => {
                  addToCart(selectedPostcard.shopifyId, 1);
                }}
              >
                $12 &mdash; ADD TO BAG
              </Checkout>
            )}

            {/* <p>NOTE:</p>
              <p>Our postcards are sustainably sourced from individual collectors. As such, we cannot guarantee a specific card for your recipient.</p>
              <p>If you have a specific idea of a postcard or message you would like to send, include it in a message with your order and we’ll do our best to meet your request!</p> */}
          </motion.div>
        </div>
      </div>
      <Divider />
      <How />
    </Layout>
  );
};

export default ProductPage;
