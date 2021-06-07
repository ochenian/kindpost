import React, { useState, useContext, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'react-medium-image-zoom/dist/styles.css';
import styled from 'styled-components';
// fetch the large, unoptimized version of the SDK
import Client from 'shopify-buy/index.unoptimized.umd';
import { useAddItemToCart, useCartItems } from 'gatsby-theme-shopify-manager';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../layouts/index';
import CtaButton from '../components/shared/Button';
import { CartContext } from '../components/Cart/CartContext';
import How from '../components/How';
import Instagram from '../components/Instagram';
import ThreeDPostcard from '../components/PostcardShowcase/3D_Postcard';

const ProductName = styled.h1`
  margin-bottom: 1rem;
  background: linear-gradient(100deg,rgb(248,7,89),rgb(188,78,156));
  color: #fff;
  padding: 12px;
  width: fit-content;
}
`;

const SubHeaderLabel = styled.div`
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #282828;
  margin: 1rem 0;
`;

const Description = styled.div`
  /* margin: 1rem 0; */
  margin-bottom: 1rem;
  max-width: 60ch;
  letter-spacing: 0.5px;
  line-height: 2;
  color: #282828;
  font-family: 'calluna';
`;

const OptionsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -12px 0 0 -12px;
  width: calc(100% + 12px);

  margin-bottom: 1rem;
`;

const SelectButton = styled(CtaButton)`
  &&& {
    margin: 12px 0 0 12px;
    color: #f40075;
    border: 2px solid #f40075;
    letter-spacing: 2px;
    border-radius: 0;

    &.selected {
      background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
      color: #fff;
      border: 2px solid transparent;
    }
  }
`;

const AddresseeContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  &&& button {
    margin: 0;
    flex: 1;

    &:first-of-type {
      border-right: 1px solid transparent;

      @media (max-width: 950px) {
        margin-bottom: 1rem;
        border-right: 1px solid #d4004c;
      }
    }

    &.selected {
      background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
      color: #fff;
      border: 2px solid transparent;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const AddresseeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  input {
    transiton: 0.5s all;
    padding: 1em 3em;
    font-size: 1.1rem;
    border: 2px solid #f40075;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;

    ::placeholder {
      color: #afafaf;
    }
  }

  textarea {
    resize: none;
    transiton: 0.5s all;
    padding: 1em 3em;
    font-size: 1.1rem;
    border: 2px solid #f40075;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;

    ::placeholder {
      color: #afafaf;
    }
  }
`;

const CharsRemaining = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  margin-left: auto;
`;

const SpecialRequestsDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
`;

const Checkout = styled(CtaButton)`
  &&& {
    color: #f40075;
    border: 2px solid #f40075;
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
  max-width: 50ch;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  width: 90%;
  margin-top: 64px;
  font-family: 'calluna';
`;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: 'futura-pt';
  height: 100%;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 50%;
  align-items: center;
  position: relative;
  background: #fadbdb;
  padding: 96px;
  height: 100vh;

  @media (max-width: 950px) {
    padding: 164px 64px;
  }
`;

const StyledThreeDPostcard = styled(ThreeDPostcard)`
  max-width: 550px;
  width: 100%;
  min-width: 150px;
`;

const StyledPostcardAccents = styled(Img)`
  width: 100%;
  position: absolute;
`;

const RightSide = styled.div`
  flex: 1 1 50%;
  background: #fff;
  display: flex;
  flex-direction: column;

  padding: 8em 96px;

  @media (max-width: 950px) {
    padding: 64px;
  }

  @media (max-width: 450px) {
    padding: 64px 24px;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    text-transform: lowercase;
    font-family: 'Averia Serif Libre';
    line-height: 0.75;
  }

  p {
    font-size: 0.9em;
    margin: 1em 0;
    font-weight: 400;
    color: rgb(74, 74, 74);
    width: 75%;
  }
`;

const Price = styled.h2`
  font-size: 1.5rem;
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

  const [flipped, setFlipped] = useState(false);

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
      confetti: file(relativePath: { eq: "confetti_hi.png" }) {
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

  const [selectedAddressee, setSelectedAddressee] = useState(null);

  const [isAddToCartDisabled, setAddToCartDisabled] = useState(
    cartItems
      .map(item => item.variant.title.toLowerCase())
      .includes(selectedPostcard.id),
  );

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  });

  const rightSide = useRef();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    rightSide.current.addEventListener('scroll', () => {
      setScroll(rightSide.current.scrollY > 10);
    });
  }, []);

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

  const postcardContainerRef = useRef();
  const productContainerRef = useRef();
  const leftSideRef = useRef();

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

  const addItemToCart = useAddItemToCart();

  async function addToCart(variantId, quantity, customAttributes) {
    try {
      await addItemToCart(variantId, quantity, customAttributes);
      toggleCart();
      setAddToCartDisabled(true);
    } catch (e) {
      console.log(e);
    }
  }

  const specialRequestsRef = useRef();
  const [specialRequests, setSpecialRequests] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(255);
  const handleSpecialRequestsChange = () => {
    const chars = 255 - specialRequestsRef.current.value.length;
    setCharsRemaining(chars);
    setSpecialRequests(specialRequestsRef.current.value);
  };

  const toInputRef = useRef();
  const [toInputValue, setToInputValue] = useState('');
  const handleToInputChange = () => {
    setToInputValue(toInputRef.current.value);
  };

  const fromInputRef = useRef();
  const [fromInputValue, setFromInputValue] = useState('');
  const handleFromInputChange = () => {
    setFromInputValue(fromInputRef.current.value);
  };

  function onScroll() {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = rightSide.current.scrollTop;
    setScroll(scrollTop > 10);
  }

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 950px)': () => {
        ScrollTrigger.create({
          trigger: productContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftSideRef.current,
        });
      },
    });
  });

  return (
    <Layout
      site={data.site.siteMetadata.siteName}
      headerClass={`Header light ${scroll ? 'scrolled' : ''}`}
    >
      <div>
        <ProductContainer ref={productContainerRef}>
          <LeftSide ref={leftSideRef}>
            <StyledThreeDPostcard
              frontImg={selectedPostcard.imgFront}
              backImg={selectedPostcard.imgBack}
              postcardContainerRef={postcardContainerRef}
              flip={flipped}
              onClick={() => setFlipped(flippedState => !flippedState)}
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
          </LeftSide>

          <RightSide onScroll={onScroll} ref={rightSide}>
            <ProductName>KINDPOST</ProductName>
            <Price>$12</Price>
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
                  <SelectButton
                    key={product.id}
                    className={`${
                      selectedPostcard.id === product.id ? 'selected' : ''
                    }`}
                    onClick={() => onPostcardSelect(product)}
                  >
                    {product.name}
                  </SelectButton>
                );
              })}
            </OptionsContainer>
            {selectedPostcard && (
              <>
                <Description>{selectedPostcard.description}</Description>
              </>
            )}

            <SubHeaderLabel>RECIPIENT</SubHeaderLabel>
            <AddresseeContainer>
              <SelectButton
                className={`${selectedAddressee === 'me' ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAddressee('me');
                  ScrollTrigger.refresh(true);
                }}
              >
                for me
              </SelectButton>
              <SelectButton
                className={`${selectedAddressee === 'else' ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAddressee('else');
                  ScrollTrigger.refresh(true);
                }}
              >
                for someone else
              </SelectButton>
            </AddresseeContainer>

            {selectedAddressee && (
              <AddresseeInfoContainer>
                {selectedAddressee === 'else' && (
                  <>
                    <SubHeaderLabel htmlFor="to">TO</SubHeaderLabel>
                    <input
                      id="to"
                      ref={toInputRef}
                      value={toInputValue}
                      onChange={handleToInputChange}
                      maxLength="50"
                      placeholder="Who should we list as the recipient? (e.g., Dinah)"
                    />

                    <SubHeaderLabel htmlFor="from">FROM</SubHeaderLabel>
                    <input
                      id="from"
                      ref={fromInputRef}
                      value={fromInputValue}
                      onChange={handleFromInputChange}
                      maxLength="50"
                      placeholder="Who should we list as the sender? (e.g., Alice)"
                    />
                  </>
                )}
                <SubHeaderLabel htmlFor="instructions">
                  SPECIAL REQUESTS
                </SubHeaderLabel>
                <textarea
                  id="instructions"
                  ref={specialRequestsRef}
                  value={specialRequests}
                  maxLength="255"
                  rows="5"
                  placeholder="Any special requests or relevant information? Kindpost's mission is positivity, so please keep it kind :)"
                  onChange={() => handleSpecialRequestsChange()}
                />
                <CharsRemaining>{`${charsRemaining} characters remaining`}</CharsRemaining>
                <SpecialRequestsDisclaimer>
                  PLEASE NOTE:
                  <div>
                    We cannot guarantee that we will be able to accomodate any
                    special requests.
                  </div>
                </SpecialRequestsDisclaimer>
              </AddresseeInfoContainer>
            )}

            {showSoldOut ? (
              <SoldOut disabled>
                {showAlreadyInCart ? 'ALREADY IN CART' : 'SOLD OUT'}
              </SoldOut>
            ) : (
              <Checkout
                onClick={() => {
                  const keys = [];
                  if (toInputValue !== '') {
                    keys.push({ key: 'To', value: toInputValue });
                  }

                  if (fromInputValue !== '') {
                    keys.push({ key: 'From', value: fromInputValue });
                  }

                  if (specialRequests !== '') {
                    keys.push({ key: 'Requests', value: specialRequests });
                  }

                  if (keys.length > 0) {
                    addToCart(selectedPostcard.shopifyId, 1, keys);
                  } else {
                    addToCart(selectedPostcard.shopifyId, 1);
                  }
                }}
              >
                $12 &mdash; ADD TO BAG
              </Checkout>
            )}
          </RightSide>
        </ProductContainer>
        <How />
        <Instagram />
      </div>
    </Layout>
  );
};

export default ProductPage;
