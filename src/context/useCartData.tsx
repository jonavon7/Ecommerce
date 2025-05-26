import { Product } from "@/models/Product";
import { createContext, useContext, useMemo, useState } from "react";

export interface CartData {
    productList: Product[];
    setProductList: (productList: Product[]) => void;
}

const CartContext = createContext<CartData>({
    productList: [],
    setProductList: () => { },
});

export const useCartData = (): CartData => useContext(CartContext);

export const CartDataProvider = ({ children: children }) => {
    const [productList, setProductList] = useState<Product[]>([]);

    // Prevent unnecessary re-renders
    const value = useMemo(() => ({ productList, setProductList }), [productList]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
