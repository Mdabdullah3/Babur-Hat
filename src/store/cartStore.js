import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product, quantity = 1) => {
                let productAdded = false;
                set((state) => {
                    const productExists = state.cart.find((item) => item._id === product._id);
                    if (productExists) {
                        productAdded = false;
                        return state;
                    }
                    const { _id, user, coverPhoto, price, name, stock, size } = product;
                    const newCart = [
                        ...state.cart,
                        {
                            _id,
                            userId: user._id,
                            coverPhoto: coverPhoto.secure_url,
                            name,
                            quantity,
                            stock,
                            price,
                            size
                        }
                    ];
                    productAdded = true;
                    return { cart: newCart };
                });
                return productAdded;
            },
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
