// src/store/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const setCartAndUpdateStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        return { cart };
    };

    return {
        cart: Array.isArray(storedCart) ? storedCart : [],
        addToCart: (product) => set((state) => {
            const productExists = state.cart.find((item) => item.id === product.id);
            if (productExists) {
                return state;
            }
            const newCart = [...state.cart, { ...product, quantity: 1 }];
            return setCartAndUpdateStorage(newCart);
        }),
        removeFromCart: (id) => set((state) => {
            const newCart = state.cart.filter((item) => item.id !== id);
            return setCartAndUpdateStorage(newCart);
        }),
        updateQuantity: (id, quantity) => set((state) => {
            const newCart = state.cart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            );
            return setCartAndUpdateStorage(newCart);
        }),
        clearCart: () => set(() => setCartAndUpdateStorage([]))
    };
});

export default useCartStore;
