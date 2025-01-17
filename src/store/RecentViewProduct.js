import { create } from "zustand";

const useRecentlyViewedStore = create((set) => ({
    recentlyViewed: [],
    addRecentlyViewed: (product) =>
        set((state) => {
            const isAlreadyInViewed = state.recentlyViewed.some(
                (item) => item?._id === product?._id
            );
            if (isAlreadyInViewed) return state;

            const updatedRecentlyViewed = [product, ...state?.recentlyViewed].slice(
                0,
                5
            );
            localStorage.setItem(
                "recentlyViewed",
                JSON.stringify(updatedRecentlyViewed)
            );

            return { recentlyViewed: updatedRecentlyViewed };
        }),
    initializeRecentlyViewed: () => {
        const storedRecentlyViewed =
            JSON.parse(localStorage.getItem("recentlyViewed")) || [];
        set({ recentlyViewed: storedRecentlyViewed });
    },
}));

export default useRecentlyViewedStore;
