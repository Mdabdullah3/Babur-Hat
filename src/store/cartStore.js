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
                    const { _id, name, user, coverPhoto } = product;
                    const { price, discount, size, color, } = variant;

                    const newCart = [
                        ...state.cart,
                        {
                            _id,
                            userId: user._id,
                            variantId: variant?._id,
                            name,
                            size,
                            color,
                            originalPrice: discount ? discount : price,
                            price: discount ? discount : price,
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
        }),
        {
            name: "cart-storage",
        }
    )
);

export default useCartStore;
