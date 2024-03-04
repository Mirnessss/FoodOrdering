import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from '../types';
import { randomUUID } from 'expo-crypto'



type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
}



export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
});


const CartProvider = ({children}: PropsWithChildren) => {
const [items, setItems] = useState<CartItem[]>([]);
const addItem = (product: Product, size: CartItem['size']) => {
// if already in cart, increment quantity



   const newCartItem: CartItem = {
    id: randomUUID(), // generate
    product,
    product_id: product.id,
    size,
    quantity: 1,

   }

   setItems([newCartItem, ...items])
}

// updateQuantity
const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items.map(item =>
        item.id !== itemId ? item : { ...item, quantity: item.quantity + amount }
    );
    setItems(updatedItems);
};

console.log(items);

    return (
        <CartContext.Provider value = {{ items: items, addItem, updateQuantity }}>
         {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);