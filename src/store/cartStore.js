// src/store/cartStore.js
import create from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => {
        const productExists = state.cart.find((item) => item.id === product.id);
        if (productExists) {
            return { error: 'Product already in cart' };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
    })),
    clearCart: () => set({ cart: [] })
}));

export default useCartStore;
