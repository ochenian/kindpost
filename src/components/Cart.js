import React from 'react'

const CartHeader = () => (
  <div className="cart-header">
    <span className="title">Your Bag</span>
    {/* <close-cart-action class="snipcart-cart-header__close-button snipcart-modal__close"> */}
    <close-cart-action class="">
        {/* <icon class="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow" /> */}
        {/* <Logo class="snipcart-modal__close-icon" /> */}
        {/* <span class="snipcart-modal__close-icon">X</span> */}
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Remove item" title="Remove item" class="snipcart__icon--darker snipcart__icon--medium snipcart__icon--angled snipcart__icon"><path d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z" fill="#313749"></path></svg>
    </close-cart-action>
  </div>
)

export default CartHeader
