import { create } from 'zustand';

const useCartStore = create((set) => {
    const getStoredCart = () => {
        if (typeof localStorage !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cart'));
            return Array.isArray(storedCart) ? storedCart : [];
        }
        return [];
    };

    const setCartAndUpdateStorage = (cart) => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        return { cart };
    };

    return {
        cart: getStoredCart(),
        addToCart: (product) => {
            let productExists = false;
            set((state) => {
                productExists = state.cart.find((item) => item.id === product.id);
                if (productExists) {
                    return state;
                }
                const newCart = [...state.cart, { ...product, quantity: 1 }];
                return setCartAndUpdateStorage(newCart);
            });
            if (productExists) {
                return { error: 'Product already in cart' };
            } else {
                return { success: 'Product added to cart' };
            }
        },
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
