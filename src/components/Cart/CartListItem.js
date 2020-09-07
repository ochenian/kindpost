import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useUpdateItemQuantity, useRemoveItemFromCart, useCartItems } from 'gatsby-theme-shopify-manager';
import Add from '../../assets/svg/add-24px.svg';
import Remove from '../../assets/svg/remove-24px.svg';
import Delete from '../../assets/svg/delete_outline-24px.svg';
import { Input } from '../shared/FormElements';
import { Button } from '../shared/Buttons';
import CartThumbnail from './CartThumbnail';
import { breakpoints, colors, spacing } from '../../utils/styles';


const CartListItemRoot = styled('li')`
  /* align-items: center; */
  border-bottom: 1px solid ${colors.brandLight};
  display: flex;
  /* justify-content: space-between; */
  padding: ${spacing.md}px 0;
  max-height: 105px;
`;

const Thumbnail = styled(CartThumbnail)`
  flex-grow: 0;
  margin-left: ${spacing['2xs']}px;
  margin-right: ${spacing.sm}px;
  width: 25%;
  max-width: 115px;
`;

const Info = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled('span')`
  display: block;
  font-size: 1.5rem;
  /* line-height: 1.2; */
  line-height: 0.75;
`;

const Meta = styled('span')`
  color: ${colors.textLight};
  display: block;
  font-size: 0.95rem;
  font-style: normal;
  line-height: 1;
  text-transform: uppercase;
`;

const QtyContainer = styled.div`
  display: flex;
  /* margin-top: 1em; */
`

const Quantity = styled(Input)`
  border: none;
  flex-grow: 0;
  height: 22px;
  /* margin-right: ${spacing.xs}px; */
  padding: 0 ${spacing.xs}px 0;
  text-align: center;
  width: 25px;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 50px;
  }
`;

const QtyChange = styled(Button)`
  border: 1px solid ${colors.textLighter};
  display: flex;
  height: 22px;
  justify-content: center;
  /* margin-right: ${spacing['2xs']}px; */
  padding: 0;
  width: 22px;
  color: #000;

  svg {
    height: 16px;
    margin: 0;
    width: 16px;
  }
`

const Price = styled.div`
  align-self: flex-start;
  line-height: 1;
  margin-top: 4px;
  margin-right: 16px;
`

const DeleteIcon = styled(Delete)`
  cursor: pointer;
`

// const Remove = styled(Button)`
//   border: 1px dotted ${colors.textLighter};
//   display: flex;
//   height: 44px;
//   justify-content: center;
//   margin-right: ${spacing['2xs']}px;
//   padding: 0;
//   width: 44px;

//   svg {
//     height: 24px;
//     margin: 0;
//     width: 24px;
//   }
// `;

export default ({
  item,
  toggle,
  setCartLoading,
  isCartLoading,
}) => {
  const cartItems = useCartItems();
  const updateItemQuantity = useUpdateItemQuantity();
  const removeItemFromCart = useRemoveItemFromCart();
  const [quantity, setQuantity] = useState(1);
  const quantityEl = useRef(null)

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
      console.log(toggle)
      toggle()
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
    // setCartLoading(true);
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
    removeItem(item.variant.id);
  };

  // const setNativeValue = (element, value) => {
  //   const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  //   const prototype = Object.getPrototypeOf(element);
  //   const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  //   if (valueSetter && valueSetter !== prototypeValueSetter) {
  //     prototypeValueSetter.call(element, value);
  //   } else {
  //     valueSetter.call(element, value);
  //   }
  // }

  const increment = event => {
    quantityEl.current.stepUp();
    // setNativeValue(quantityEl.current, quantityEl.current.value);
    quantityEl.current.dispatchEvent(new Event('change', {bubbles: true}));
  }

  const decrement = event => {
    quantityEl.current.stepDown();
    quantityEl.current.dispatchEvent(new Event('change', {bubbles: true}));
  }

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
          Birthday
          {/* {item.variant.title}, ${item.variant.price} */}
        </Meta>
        <QtyContainer>
          <QtyChange onClick={(e) => decrement(e)}>
            <Remove />
          </QtyChange>
          <Quantity
            aria-label="Quantity"
            id={`quantity_${item.id.substring(58, 64)}`}
            type="number"
            name="quantity"
            inputmode="numeric"
            min="1"
            max="100"
            step="1"
            onChange={event => handleInputChange(event)}
            onBlur={() => setQuantity(item.quantity)}
            value={quantity}
            ref={quantityEl}
          />
          <QtyChange onClick={(e) => increment(e)}>
            <Add />
          </QtyChange>
        </QtyContainer>
      </Info>

      <Price>${item.variant.price}</Price>
      <Delete onClick={handleRemoveItem} />

      {/* <Remove onClick={handleRemoveItem}>
        <Close />
      </Remove> */}
    </CartListItemRoot>
  );
};
