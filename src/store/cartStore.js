// src/store/cartStore.js
'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) => set((state) => {
                const productExists = state.cart.find((item) => item._id === product._id);
                if (productExists) {
                    return {
                        cart: state.cart.map(item =>
                            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                        )
                    };
                }
                const newCart = [...state.cart, { ...product, quantity: 1 }];
                return { cart: newCart };
            }),
            removeFromCart: (id) => set((state) => {
                const newCart = state.cart.filter((item) => item._id !== id);
                return { cart: newCart };
            }),
            updateQuantity: (id, quantity) => set((state) => {
                const newCart = state.cart.map((item) =>
                    item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                );
                return { cart: newCart };
            }),
            clearCart: () => set({ cart: [] })
        }),
        {
            name: 'cart-storage',
            getStorage: () => (typeof window !== 'undefined' ? localStorage : undefined),
        }
    )
);

export default useCartStore;
