import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishlistStore = create(
    persist(
        (set) => ({
            wishlist: [],
            addToWishlist: (product, variant, quantity = 1) => {
                let productAdded = false;
                set((state) => {
                    const productExists = state.wishlist.find((item) => item._id === product._id);
                    if (productExists) {
                        productAdded = false;
                        return state;
                    }
                    const { _id, name, user, coverPhoto } = product;
                    const { price, discount, size, color, } = variant;
                    const newWishlist = [...state.wishlist,
                    {
                        _id,
                        userId: user._id,
                        variant: variant,
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
                    return { wishlist: newWishlist };
                });
                return productAdded;
            },
            removeFromWishlist: (id) => set((state) => {
                const newWishlist = state.wishlist.filter((item) => item._id !== id);
                return { wishlist: newWishlist };
            }),
            clearWishlist: () => set({ wishlist: [] })
        }),
        {
            name: 'wishlist-storage',
            getStorage: () => (typeof window !== 'undefined' ? localStorage : undefined),
        }
    )
);

export default useWishlistStore;
