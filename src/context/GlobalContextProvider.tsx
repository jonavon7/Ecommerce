import React, { PropsWithChildren } from 'react';
import { CartDataProvider } from './useCartData';

const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <CartDataProvider>
      {children}
    </CartDataProvider>
  )
};

export default GlobalContextProvider;
