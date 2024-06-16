import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWishlistStore = create(
    persist(
        (set) => ({
            wishlist: [],
            addToWishlist: (product) => {
                let productAdded = false;
                set((state) => {
                    const productExists = state.wishlist.find((item) => item._id === product._id);
                    if (productExists) {
                        productAdded = false;
                        return state;
                    }
                    const newWishlist = [...state.wishlist, product];
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
