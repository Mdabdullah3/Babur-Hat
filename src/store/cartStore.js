import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product, variant, quantity = 1) => {
                let productAdded = false;
                set((state) => {
                    const productExists = state?.cart.find(
                        (item) => item?._id === product?._id && item?.size === variant?.size
                    );
                    if (productExists) {
                        productAdded = false;
                        return state;
                    }
                    const { _id, name, user, coverPhoto, category, subCategory } = product;
                    const { price, discount, size, color, } = variant;
                    const newCart = [
                        ...state.cart,
                        {
                            _id,
                            category,
                            subCategory,
                            userId: user._id,
                            variantId: variant?._id,
                            name,
                            size,
                            color,
                            originalPrice: discount > 0 ? discount : price,
                            price: discount > 0 ? discount : price,
                            quantity,
                            coverPhoto,
                        },
                    ];
                    productAdded = true;
                    return { cart: newCart };
                });
                return productAdded;
            },
            removeFromCart: (productId, size) => {
                set((state) => ({
                    cart: state.cart.filter(
                        (item) => item._id !== productId || item.size !== size
                    ),
                }));
            },
            clearCart: () => set({ cart: [] }),
            updateQuantity: (productId, size, quantity) => {
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item._id === productId && item.size === size
                            ? { ...item, quantity: Math.max(1, quantity) }
                            : item
                    ),
                }));
            },
            updatePrice: (productId, size, newPrice) => {
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item._id === productId && item.size === size
                            ? { ...item, price: newPrice, couponApplied: true }
                            : item
                    ),
                }));
            },
        }),
        {
            name: "cart-storage",
        }
    )
);

export default useCartStore;
