import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUpdateItemQuantity, useRemoveItemFromCart, useCartItems } from 'gatsby-theme-shopify-manager';
import Close from '../../assets/svg/close.svg';
import { Input } from '../shared/FormElements';
import { Button } from '../shared/Buttons';
import CartThumbnail from './CartThumbnail';
import { breakpoints, colors, spacing } from '../../utils/styles';


const CartListItemRoot = styled('li')`
  align-items: center;
  border-bottom: 1px solid ${colors.brandLight};
  display: flex;
  justify-content: space-between;
  padding: ${spacing.md}px 0;
`;

const Thumbnail = styled(CartThumbnail)`
  flex-grow: 0;
  margin-left: ${spacing['2xs']}px;
  margin-right: ${spacing.sm}px;
`;

const Info = styled('div')`
  flex-grow: 1;
`;

const Name = styled('span')`
  display: block;
  font-size: 1rem;
  line-height: 1.2;
`;

const Meta = styled('span')`
  color: ${colors.textLight};
  display: block;
  font-size: 0.95rem;
  font-style: normal;
`;

const Quantity = styled(Input)`
  flex-grow: 0;
  height: 44px;
  margin-right: ${spacing.xs}px;
  padding: 0 ${spacing.xs}px 0;
  text-align: center;
  width: 50px;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 70px;
  }
`;

const Remove = styled(Button)`
  border: 1px dotted ${colors.textLighter};
  display: flex;
  height: 44px;
  justify-content: center;
  margin-right: ${spacing['2xs']}px;
  padding: 0;
  width: 44px;

  svg {
    height: 24px;
    margin: 0;
    width: 24px;
  }
`;

export default ({
  item,
  setCartLoading,
  isCartLoading
}) => {
  const cartItems = useCartItems();
  const updateItemQuantity = useUpdateItemQuantity();
  const removeItemFromCart = useRemoveItemFromCart();
  const [quantity, setQuantity] = useState(1);

  async function updateQuantity(qty) {
    if (item.variant.id == null) {
      return;
    }

    try {
      await updateItemQuantity(item.variant.id, qty);
    } catch(e) {
      console.log(e)
    }
  }

  async function removeItem(itemId) {
    if (itemId == null) {
      return;
    }

    if (cartItems.length < 1) {
      return;
    }

    try {
      await removeItemFromCart(item.variant.id)
      setCartLoading(false)
    } catch(e) {
      console.log(e)
    }
  }

  const handleInputChange = event => {
    if (isCartLoading) {
      return;
    }

    const value = event.target.value;

    // Make sure the quantity is always at least 1.
    const safeValue = Math.max(Number(value), 0);

    // No need to update if the value hasn’t updated.
    if (value === quantity) {
      return;
    }

    // If the field is empty, update the state but don’t do anything else.
    if (value === '') {
      setQuantity(value);
      return;
    }

    // Otherwise, trigger the loading state and set the quantity in state.
    setCartLoading(true);
    setQuantity(safeValue);

    // If the quantity is set to 0, remove the item.
    if (safeValue === 0) {
      // handleRemove(event);
      removeItem(item.variant.id);
      return;
    }

    // If we get here, update the quantity.
    updateQuantity(safeValue);
  };

  const handleRemoveItem = event => {
    setCartLoading(true);
    removeItem(item.variant.id);
  };

  return (
    <CartListItemRoot>
      <Thumbnail
        id={item.variant.image.id}
        fallback={item.variant.image.src}
        alt={item.variant.image.altText}
      />
      <Info>
        <Name>{item.title}</Name>
        <Meta>
          {item.variant.title}, ${item.variant.price}
        </Meta>
      </Info>
      <Quantity
        aria-label="Quantity"
        id={`quantity_${item.id.substring(58, 64)}`}
        type="number"
        name="quantity"
        inputmode="numeric"
        min="1"
        step="1"
        onChange={event => handleInputChange(event)}
        onBlur={() => setQuantity(item.quantity)}
        value={quantity}
      />
      <Remove onClick={handleRemoveItem}>
        <Close />
      </Remove>
    </CartListItemRoot>
  );
};
