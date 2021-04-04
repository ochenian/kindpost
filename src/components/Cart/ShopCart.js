import React, { Component, useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  useCart,
  useCartItems,
  useCartCount,
  useRemoveItemFromCart,
  useCheckoutUrl,
} from 'gatsby-theme-shopify-manager';
import Client from 'shopify-buy/index.unoptimized.umd';
import Close from '../../assets/svg/clear-24px.svg';
import { CartContext } from './CartContext';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import { Button, PrimaryButton } from '../shared/Buttons';

import {
  breakpoints,
  colors,
  fonts,
  spacing,
  dimensions,
} from '../../utils/styles';

const CartRoot = styled(`div`)`
  background: ${colors.lightest};
  bottom: 0;
  position: fixed;
  right: 0;
  top: -1px;
  transform: translateX(100%);
  transition: transform 0.75s;
  width: 100%;
  will-change: transform;
  z-index: 1000;

  &.open {
    transform: translateX(0%);
  }

  &.closed {
    transform: translateX(100%);
  }

  ::after {
    background-color: ${colors.lightest};
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 250ms;
  }

  &.loading {
    ::after {
      opacity: 0.9;
      pointer-events: all;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    width: ${dimensions.cartWidthDesktop};

    &.covered {
      display: none;
    }
  }
`;

const Heading = styled(`header`)`
  align-items: center;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: flex-start;
  padding: 0 24px;
  margin-top: 1rem;
`;

const Title = styled.h2`
  flex-grow: 1;
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;

const Content = styled(`div`)`
  bottom: 0;
  overflow-y: auto;
  padding: ${spacing.lg}px;
  position: absolute;
  top: ${dimensions.headerHeight};
  width: 100%;

  @media (min-width: ${breakpoints.desktop}px) {
    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.brandBright};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${colors.lilac};
    }
    ::-webkit-scrollbar-track {
      background: ${colors.brandLight};
    }
  }
`;

const ItemsNumber = styled(`span`)`
  align-items: center;
  background: ${colors.lemon};
  border-radius: 50%;
  color: ${colors.brandDark};
  display: flex;
  font-size: 1.3rem;
  font-weight: bold;
  height: 36px;
  justify-content: center;
  width: 36px;
`;

const ItemsInCart = styled(`div`)`
  align-items: center;
  display: flex;
  font-size: 0.8rem;
  line-height: 1.2;
  text-align: right;

  ${ItemsNumber} {
    margin-left: ${spacing.xs}px;
    margin-right: ${spacing.md}px;
  }
`;

const Costs = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.sm}px;
  text-transform: uppercase;
`;

const Cost = styled(`div`)`
  display: flex;
  padding: 0 ${spacing.xs}px ${spacing['2xs']}px;

  :last-child {
    padding-bottom: 0;
  }

  span {
    color: ${colors.textMild};
    flex-basis: 60%;
    font-size: 0.9rem;
    text-align: right;
  }

  strong {
    color: ${colors.brand};
    flex-basis: 40%;
    text-align: right;
  }
`;

const Total = styled(Cost)`
  border-top: 1px solid ${colors.brandBright};
  color: ${colors.black};
  margin-top: ${spacing.xs}px;
  padding-top: ${spacing.sm}px;

  span {
    font-weight: bold;
    text-transform: uppercase;
  }

  strong,
  span {
    color: inherit;
  }
`;

const iconEntry = keyframes`
  0%, 50% {
    transform: scale(0)
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const numberEntry = keyframes`
  0%{
    transform: scale(0)
  }
  90% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(0.6);
  }
`;

const CartToggle = styled(Button)`
  background: ${colors.lightest};
  border: none;
  border-radius: 0;
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: center;
  left: 0;
  padding: 0;
  position: relative;
  top: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  width: ${dimensions.headerHeight};

  :focus {
    box-shadow: 0 0 0 1px ${colors.accent} inset;
  }

  .open & {
    background: ${colors.lilac};
    color: ${colors.lightest};
    transform: translateX(0);
  }

  @media (min-width: ${breakpoints.desktop}px) {
    .open & {
      transform: translateX(-100%);
    }
  }

  svg {
    animation: ${iconEntry} 0.75s ease forwards;
    height: 28px;
    margin: 0;
    width: 28px;
  }

  ${ItemsNumber} {
    animation: ${numberEntry} 0.5s ease forwards;
    position: absolute;
    right: ${spacing['3xs']}px;
    top: ${spacing['3xs']}px;
    transform: scale(0.6);
  }
`;

const CheckOut = styled(PrimaryButton)`
  font-size: 1.25rem;
  margin: ${spacing.lg}px 0 ${spacing.md}px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BackLink = styled(Button)`
  font-size: 1.25rem;
  margin-bottom: ${spacing.sm}px;
  width: 100%;
  text-transform: lowercase;
  letter-spacing: 1px;
`;

const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  // background: #f40075;
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  z-index: 1;
  transition: 0.8s;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;

  svg {
    fill: #fff;
  }
`;

const SoldOut = styled(Button)`
  color: #fff;
  background: #dedede;
  letter-spacing: 2px;
  cursor: default;
  border: none;

  font-size: 1.25rem;
  margin-bottom: ${spacing.sm}px;
  width: 100%;
  text-transform: uppercase;
`;

const Cart = () => {
  const [state, setState] = useState({ className: 'closed', isLoading: false });
  const { showCart, toggleCart } = useContext(CartContext);
  const { className } = state;
  const itemsInCart = useCartCount();
  const cart = useCart();
  const checkoutUrl = useCheckoutUrl();
  const setCartLoading = bool => setState({ isLoading: bool });
  const client = Client.buildClient({
    domain: `${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com`,
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  });
  const [soldOut, setSoldOut] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const cartItems = useCartItems();

  useEffect(() => {
    if (cartItems.length > 0) {
      setShowItems(true);
    } else {
      setShowItems(false);
    }
  }, [cartItems]);

  useEffect(() => {
    setState({
      className: showCart ? 'open' : 'closed',
    });
  }, [showCart]);

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

  const removeItemFromCart = useRemoveItemFromCart();

  return (
    <CartRoot className={`${className} ${state.isLoading ? 'loading' : ''}`}>
      <Heading>
        <Title>My Bag</Title>
        <CloseBtn onClick={toggleCart}>
          <Close />
        </CloseBtn>
      </Heading>
      {showItems ? (
        <Content>
          <CartList
            items={cartItems}
            toggle={toggleCart}
            setCartLoading={setCartLoading}
            isCartLoading={state.isLoading}
          />

          <Costs>
            <Cost>
              <span>Subtotal:</span>
              <strong>${cart.subtotalPrice}</strong>
            </Cost>
            <Cost>
              <span>Shipping:</span>
              <strong>FREE</strong>
            </Cost>
            <Cost>
              <span>Taxes:</span>
              <strong>
                {parseFloat(cart.totalTax) === 0
                  ? 'Calculated at checkout'
                  : `$${cart.totalTax}`}
              </strong>
            </Cost>
            <Total>
              <span>{`Total ${
                parseFloat(cart.totalTax) === 0 ? `(excluding taxes)` : ``
              }:`}</span>
              <strong>${cart.totalPrice}</strong>
            </Total>
          </Costs>

          {soldOut ? (
            <SoldOut disabled>SOLD OUT</SoldOut>
          ) : (
            <CheckOut href={checkoutUrl}>
              Checkout
              {/* <MdArrowForward /> */}
            </CheckOut>
          )}
          <BackLink onClick={toggleCart}>
            {/* <MdArrowBack /> */}
            Back to shopping
          </BackLink>
        </Content>
      ) : (
        <EmptyCart />
      )}
    </CartRoot>
  );
};

export default Cart;
