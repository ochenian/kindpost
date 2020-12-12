import React, { createContext, useState } from 'react';

const defaultState = {
  showCart: false,
  toggleCart: () => {},
};

export const CartContext = createContext(defaultState);

const Provider = props => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{
        showCart,
        toggleCart: () => setShowCart(!showCart),
      }}>
        {props.children}
      </CartContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
// export { Provider, CartContext };
